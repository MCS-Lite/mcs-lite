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
const CLEAR = 'mcs-lite-mobile-web/devices/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDeviceList = (callback = emptyFunction) => ({ type: FETCH_DEVICE_LIST, callback });
const fetchDeviceDetail = (callback = emptyFunction) => ({ type: FETCH_DEVICE_DETAIL, callback });
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

const fetchDeviceListEpic = (action$) => {
  const fetchDeviceList$ = action$.ofType(FETCH_DEVICE_LIST);
  const callback$ = fetchDeviceList$.pluck('callback');
  const devices$ = fetchDeviceList$
    .delay(1000)
    .mapTo(devicesJSON.results); // fake

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
