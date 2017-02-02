// -----------------------------------------------------------------------------
// 1. Constants
// -----------------------------------------------------------------------------

const FETCH_DEVICES = 'mcs-lite-mobile-web/devices/FETCH_DEVICES';
const SET_DEVICES = 'mcs-lite-mobile-web/devices/SET_DEVICES';

// -----------------------------------------------------------------------------
// 2. Actions Creators (expose API)
// -----------------------------------------------------------------------------

const fetchDevices = () => ({ type: FETCH_DEVICES });
const setDevices = payload => ({ type: SET_DEVICES, payload });

export const actions = {
  fetchDevices,
};

// -----------------------------------------------------------------------------
// 3. Epic (action Logic)
// -----------------------------------------------------------------------------

const fetchDevicesEpic = action$ =>
  action$
    .ofType(FETCH_DEVICES)
    .mapTo([{ id: 123, name: 'deviceName' }]) // fake
    .map(setDevices);

export const epics = [
  fetchDevicesEpic,
];

// -----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// -----------------------------------------------------------------------------

const initialState  = {
  devices: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DEVICES:
      return {
        ...state,
        devices: action.payload,
      };
    default:
      return state;
  }
}
