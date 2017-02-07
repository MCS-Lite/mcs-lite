import { Observable } from 'rxjs/Observable';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DEVICES = 'mcs-lite-mobile-web/devices/FETCH_DEVICES';
const SET_DEVICES = 'mcs-lite-mobile-web/devices/SET_DEVICES';
const CLEAR_DEVICES = 'mcs-lite-mobile-web/devices/CLEAR_DEVICES';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDevices = callback => ({ type: FETCH_DEVICES, callback });
const setDevices = payload => ({ type: SET_DEVICES, payload });
const clearDevices = () => ({ type: CLEAR_DEVICES });

export const actions = {
  fetchDevices,
  setDevices,
  clearDevices,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const fetchDevicesEpic = (action$) => {
  const fetchDevices$ = action$.ofType(FETCH_DEVICES);
  const callback$ = fetchDevices$.pluck('callback');
  const devices$ = fetchDevices$
    .delay(1000)
    .mapTo({ name: 'deviceName', image: 'http://placehold.it/350x150' }); // fake

  return Observable
    .zip(devices$, callback$)
    .map(([devices, callback]) => {
      callback();
      return setDevices(devices);
    });
};


export const epics = [
  fetchDevicesEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DEVICES:
      return [
        ...state,
        {
          id: state.length,
          ...action.payload,
        },
      ];
    case CLEAR_DEVICES:
      return initialState;
    default:
      return state;
  }
}
