import R from 'ramda';
import { Observable } from 'rxjs/Observable';
import emptyFunction from 'mcs-lite-ui/lib/utils/emptyFunction';
import devicesJSON from './mocks/devices.api.json';
import deviceDetailJSON from './mocks/D2rbGd3.api.json';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DEVICE_LIST = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_LIST';
const FETCH_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/FETCH_DEVICE_DETAIL';
const SET_DEVICE_LIST = 'mcs-lite-mobile-web/devices/SET_DEVICE_LIST';
const SET_DEVICE_DETAIL = 'mcs-lite-mobile-web/devices/SET_DEVICE_DETAIL';
const CLEAR_DEVICES = 'mcs-lite-mobile-web/devices/CLEAR_DEVICES';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDeviceList = (callback = emptyFunction) => ({ type: FETCH_DEVICE_LIST, callback });
const fetchDeviceDetail = (callback = emptyFunction) => ({ type: FETCH_DEVICE_DETAIL, callback });
const setDeviceList = payload => ({ type: SET_DEVICE_LIST, payload });
const setDeviceDetail = payload => ({ type: SET_DEVICE_DETAIL, payload });
const clearDevices = () => ({ type: CLEAR_DEVICES });

export const actions = {
  fetchDeviceList,
  fetchDeviceDetail,
  setDeviceList,
  setDeviceDetail,
  clearDevices,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const fetchDeviceListEpic = (action$) => {
  const fetchDeviceList$ = action$.ofType(FETCH_DEVICE_LIST);
  const callback$ = fetchDeviceList$.pluck('callback');
  const devices$ = fetchDeviceList$
    .delay(1000)
    .mapTo(devicesJSON.results) // fake
    .map(devices => R.indexBy(R.prop('deviceId'), devices));

  return Observable
    .zip(devices$, callback$)
    .map(([devices, callback]) => {
      callback();
      return setDeviceList(devices);
    });
};

const fetchDeviceDetailEpic = (action$) => {
  const fetchDeviceDetail$ = action$.ofType(FETCH_DEVICE_DETAIL);
  const callback$ = fetchDeviceDetail$.pluck('callback');
  const deviceDetail$ = fetchDeviceDetail$
    .delay(1000)
    .mapTo(deviceDetailJSON.results[0]); // fake

  return Observable
    .zip(deviceDetail$, callback$)
    .map(([deviceDetail, callback]) => {
      callback();
      return setDeviceDetail(deviceDetail);
    });
};


export const epics = [
  fetchDeviceListEpic,
  fetchDeviceDetailEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DEVICE_LIST:
      // TODO: keep old device detail info
      return action.payload;

    case SET_DEVICE_DETAIL:
      return {
        ...state,
        [action.payload.deviceId]: {
          ...state[action.payload.deviceId],
          ...action.payload,
        },
      };

    case CLEAR_DEVICES:
      return initialState;

    default:
      return state;
  }
}
