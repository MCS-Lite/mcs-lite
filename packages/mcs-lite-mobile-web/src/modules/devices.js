import { Observable } from 'rxjs/Observable';
import * as fetchRx from 'mcs-lite-fetch-rx';
import { actions as uiActions } from './ui';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DEVICE_LIST = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_LIST';
const FETCH_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_DETAIL';
const SET_DEVICE_LIST = 'mcs-lite-mobile-web/devices/SET_DEVICE_LIST';
const SET_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/SET_DEVICE_DETAIL';
const CLEAR = 'mcs-lite-mobile-web/devices/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDeviceList = () => ({ type: FETCH_DEVICE_LIST });
const fetchDeviceDetail = deviceId => ({ type: FETCH_DEVICE_DETAIL, payload: deviceId });
const setDeviceList = payload => ({ type: SET_DEVICE_LIST, payload });
const setDeviceDetail = payload => ({ type: SET_DEVICE_DETAIL, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchDeviceList,
  fetchDeviceDetail,
  setDeviceList,
  setDeviceDetail,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

/**
 * tokenAvailable - require access_token
 * @return {Observable} original action$
 *
 * @author Michael Hsu
 */
const tokenAvailable = (action$, store) => () => {
  const duration$ = store.getState().auth.access_token
    ? Observable.of(true)
    : action$.ofType(require('./auth').SET_USERINFO);

  return duration$.mapTo(action$);
};

const fetchDeviceListEpic = (action$, store) =>
  action$.ofType(FETCH_DEVICE_LIST)
    .delayWhen(tokenAvailable(action$, store))
    .map(() => store.getState())
    .pluck('auth', 'access_token')
    .switchMap(accessToken => Observable.merge(
      Observable.of(uiActions.setLoading()),
      Observable
        .from(fetchRx.fetchDeviceList(accessToken))
        .map(setDeviceList),
    ));

const setDeviceListEpic = action$ =>
  action$.ofType(SET_DEVICE_LIST)
    .mapTo(uiActions.setLoaded());

const fetchDeviceDetailEpic = (action$, store) =>
  action$.ofType(FETCH_DEVICE_DETAIL)
    .delayWhen(tokenAvailable(action$, store))
    .pluck('payload')
    .switchMap(deviceId => Observable.merge(
      Observable.of(uiActions.setLoading()),
      Observable
        .from(fetchRx.fetchDeviceDetail({ deviceId }, store.getState().auth.access_token))
        .map(setDeviceDetail),
    ));

const setDeviceDetailEpic = action$ =>
  action$.ofType(SET_DEVICE_DETAIL)
    .mapTo(uiActions.setLoaded());

export const epics = [
  fetchDeviceListEpic,
  fetchDeviceDetailEpic,
  setDeviceListEpic,
  setDeviceDetailEpic,
];

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

    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
