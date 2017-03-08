import R from 'ramda';
import { constants as devicesConstants } from './devices';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DATAPOINTS = 'mcs-lite-mobile-web/datapoints/FETCH_DATAPOINTS';
const SET_DATAPOINTS = 'mcs-lite-mobile-web/datapoints/SET_DATAPOINTS';
const APPEND_DATAPOINT = 'mcs-lite-mobile-web/datapoints/APPEND_DATAPOINT';
const CLEAR = 'mcs-lite-mobile-web/datapoints/CLEAR';

export const constants = {
  FETCH_DATAPOINTS,
  SET_DATAPOINTS,
  APPEND_DATAPOINT,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDatapoints = (deviceId, dataChannelId) =>
  ({ type: FETCH_DATAPOINTS, payload: { deviceId, dataChannelId }});
const setDatapoints = payload => ({ type: SET_DATAPOINTS, payload });
const appendDatapoint = ({ dataChannelId, values }) =>
  ({ type: APPEND_DATAPOINT, payload: { dataChannelId, values }});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchDatapoints,
  setDatapoints,
  appendDatapoint,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function fetchDatapointsCycle(sources) {
  const payload$ = sources.ACTION
    .filter(action => action.type === FETCH_DATAPOINTS)
    .pluck('payload');

  const devices$ = sources.STATE
    .pluck('devices')
    .filter(R.pipe(R.isEmpty, R.not));

  const request$ = payload$
    .combineLatest(devices$)
    .map(([{ deviceId, dataChannelId }, devices]) => ({
      deviceKey: devices[deviceId].deviceKey,
      deviceId,
      dataChannelId,
    }))
    .filter(d => !!d.deviceKey)
    .distinctUntilKeyChanged('dataChannelId')
    .map(({ deviceKey, deviceId, dataChannelId }) => ({
      url: `/api/devices/${deviceId}/datachannels/${dataChannelId}/datapoints`,
      method: 'GET',
      headers: { deviceKey },
      category: 'datapoints',
    }));

  const response$ = sources.HTTP
    .select('datapoints')
    .switch();

  const action$ = response$
    .pluck('body', 'data')
    .map(setDatapoints);

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function appendDatapointCycle(sources) {
  const payload$ = sources.ACTION
    .filter(action => action.type === devicesConstants.SET_DATAPOINT)
    .pluck('payload');

  const action$ = payload$
    .filter(d => d.isFromServer) // Hint: this payload is from WebSocket server.
    .map(({ datapoint }) => ({
      dataChannelId: datapoint.datachannelId,
      values: datapoint.values,
    }))
    .map(appendDatapoint);

  return {
    ACTION: action$,
  };
}

export const cycles = {
  fetchDatapointsCycle,
  appendDatapointCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {}; // Remind: indexBy datachannelId

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DATAPOINTS:
      return {
        ...state,
        // TODO: api should move datachannelId upper scope.
        [action.payload[0].datachannelId]: action.payload,
      };
    case APPEND_DATAPOINT: {
      const dataChannelId = action.payload.dataChannelId;
      const datapoints = state[dataChannelId];
      const nextDatapoints = R.pipe(
        R.append({
          values: action.payload.values,
          // TODO: Should I create a new datetime here?
          updatedAt: action.payload.updatedAt || new Date().valueOf(),
        }),
        R.takeLast(100),
      )(datapoints);

      // TODO: API sort ?
      return {
        ...state,
        [dataChannelId]: nextDatapoints,
      };
    }

    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
