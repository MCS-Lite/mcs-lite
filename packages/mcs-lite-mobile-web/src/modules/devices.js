import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import * as fetchRx from 'mcs-lite-fetch-rx';
import { actions as uiActions } from './ui';
import { actions as routingActions } from './routing';
import { constants as authConstants } from './auth';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DEVICE_LIST = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_LIST';
const FETCH_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_DETAIL';
const SET_DEVICE_LIST = 'mcs-lite-mobile-web/devices/SET_DEVICE_LIST';
const SET_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/SET_DEVICE_DETAIL';
const SET_DATAPOINT = 'mcs-lite-mobile-web/devices/SET_DATAPOINT';
const CLEAR = 'mcs-lite-mobile-web/devices/CLEAR';

export const constants = {
  FETCH_DEVICE_LIST,
  FETCH_DEVICE_DETAIL,
  SET_DEVICE_LIST,
  SET_DEVICE_DETAIL,
  SET_DATAPOINT,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDeviceList = () => ({ type: FETCH_DEVICE_LIST });
const fetchDeviceDetail = deviceId => ({ type: FETCH_DEVICE_DETAIL, payload: deviceId });
const setDeviceList = payload => ({ type: SET_DEVICE_LIST, payload });
const setDeviceDetail = payload => ({ type: SET_DEVICE_DETAIL, payload });
const setDatapoint = (deviceId, datapoint) =>
  ({ type: SET_DATAPOINT, payload: { deviceId, datapoint }});

const clear = () => ({ type: CLEAR });

export const actions = {
  fetchDeviceList,
  fetchDeviceDetail,
  setDeviceList,
  setDeviceDetail,
  setDatapoint,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

/**
 * delayWhenTokenAvailable - require access_token
 * @return {Observable} original action$
 *
 * @author Michael Hsu
 */

const delayWhenTokenAvailable = (action$, store) => action =>
  store.getState().auth.access_token
    ? Observable.of(action)
    : Observable.of(action)
      .delayWhen(() => action$.ofType(authConstants.SET_USERINFO))
      .timeout(3000);

const fetchDeviceListEpic = (action$, store) =>
  action$.ofType(FETCH_DEVICE_LIST)
    .switchMap(delayWhenTokenAvailable(action$, store))
    .map(() => store.getState())
    .pluck('auth', 'access_token')
    .switchMap(accessToken => Observable
      .from(fetchRx.fetchDeviceList(accessToken))
      .map(setDeviceList)
      .startWith(uiActions.setLoading())
      .catch((data) => {
        // TODO: refresh token ?
        console.error(data); // eslint-disable-line
        return Observable.of(routingActions.pushPathname('/signin'));
      }),
    )
    .catch(error => Observable.of(uiActions.addToast({
      kind: 'error',
      children: error.message,
    })));

const setDeviceListEpic = action$ =>
  action$.ofType(SET_DEVICE_LIST)
    .mapTo(uiActions.setLoaded());

const fetchDeviceDetailEpic = (action$, store) =>
  action$.ofType(FETCH_DEVICE_DETAIL)
    .switchMap(delayWhenTokenAvailable(action$, store))
    .pluck('payload')
    .switchMap(deviceId => Observable
      .from(fetchRx.fetchDeviceDetail({ deviceId }, store.getState().auth.access_token))
      .map(setDeviceDetail)
      .startWith(uiActions.setLoading())
      .catch((data) => {
        // TODO: refresh token ?
        console.error(data); // eslint-disable-line
        return Observable.of(routingActions.pushPathname('/signin'));
      }),
    )
    .catch(error => Observable.of(uiActions.addToast({
      kind: 'error',
      children: error.message,
    })));

const setDeviceDetailEpic = action$ =>
  action$.ofType(SET_DEVICE_DETAIL)
    .mapTo(uiActions.setLoaded());

export const epics = {
  fetchDeviceListEpic,
  fetchDeviceDetailEpic,
  setDeviceListEpic,
  setDeviceDetailEpic,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {}; // Remind: indexBy deviceId

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DEVICE_LIST:
      return action.payload.reduce((acc, device) => ({
        ...acc,
        [device.deviceId]: {
          ...state[device.deviceId], // keep this device old info
          ...device, // list api
        },
      }), {});

    case SET_DEVICE_DETAIL:
      return {
        ...state, // keep other devices
        [action.payload.deviceId]: {
          ...state[action.payload.deviceId], // keep this device old info
          ...action.payload, // detail api
        },
      };

    case SET_DATAPOINT: {
      // TODO: refactor these codes
      const { datachannelId, values } = action.payload.datapoint;
      const dataChannels = state[action.payload.deviceId].datachannels;
      const index = R.findIndex(R.propEq('datachannelId', datachannelId))(dataChannels);
      const updateDatapoints = R.assoc('datapoints', { values });
      const nextDataChannels = R.adjust(updateDatapoints, index)(dataChannels);

      return {
        ...state,
        [action.payload.deviceId]: {
          ...state[action.payload.deviceId], // keep this device old info
          datachannels: nextDataChannels,
        },
      };
    }

    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
