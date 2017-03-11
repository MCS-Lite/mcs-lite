import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { constants as devicesConstants } from './devices';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_DATAPOINTS = 'mcs-lite-mobile-web/datapoints/FETCH_DATAPOINTS';
const SET_DATAPOINTS = 'mcs-lite-mobile-web/datapoints/SET_DATAPOINTS';
const SET_QUERY = 'mcs-lite-mobile-web/datapoints/SET_QUERY';
const APPEND_DATAPOINT = 'mcs-lite-mobile-web/datapoints/APPEND_DATAPOINT';
const CLEAR = 'mcs-lite-mobile-web/datapoints/CLEAR';

export const constants = {
  FETCH_DATAPOINTS,
  SET_DATAPOINTS,
  SET_QUERY,
  APPEND_DATAPOINT,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchDatapoints = (deviceId, dataChannelId) =>
  ({ type: FETCH_DATAPOINTS, payload: { deviceId, dataChannelId }});
const setDatapoints = ({ data, dataChannelId }) =>
  ({ type: SET_DATAPOINTS, payload: { data, dataChannelId }});
const setQuery = (dataChannelId, query) =>
  ({ type: SET_QUERY, payload: { dataChannelId, query }});
const appendDatapoint = ({ dataChannelId, values }) =>
  ({ type: APPEND_DATAPOINT, payload: { dataChannelId, values }});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchDatapoints,
  setDatapoints,
  setQuery,
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

  const dataChannelId$ = payload$.pluck('dataChannelId');
  const deviceId$ = payload$.pluck('deviceId');

  const deviceKey$ = sources.STATE
    .pluck('devices')
    .combineLatest(deviceId$, (devices, deviceId) =>
      R.pathOr(undefined, [deviceId, 'deviceKey'])(devices),
    )
    .filter(R.complement(R.isNil));

  const datapoints$ = sources.STATE
    .pluck('datapoints')
    .filter(R.complement(R.isNil));

  const query$ = datapoints$
    .combineLatest(dataChannelId$, (datapoint, dataChannelId) =>
      R.pathOr(undefined, [dataChannelId, 'query'])(datapoint),
    )
    .filter(R.complement(R.isNil))
    .startWith({});

  const request$ = Observable.combineLatest(
      deviceKey$.distinctUntilChanged(),
      deviceId$.distinctUntilChanged(),
      dataChannelId$.distinctUntilChanged(),
      query$.distinctUntilKeyChanged('start').distinctUntilKeyChanged('end'),
    )
    .map(([deviceKey, deviceId, dataChannelId, query]) => ({
      url: `/api/devices/${deviceId}/datachannels/${dataChannelId}/datapoints`,
      method: 'GET',
      headers: { deviceKey },
      category: 'datapoints',
      query,
    }));

  const response$ = sources.HTTP
    .select('datapoints')
    .switch();

  // Remind: api response with dataChannelId will be better.
  const responseDataChannedId$ = response$
    .pluck('request', 'url')
    .map(R.pipe(
      R.match(/[\w]+(?=\/datapoints$)/),
      R.head,
    ));

  const action$ = response$
    .pluck('body', 'data')
    .zip(responseDataChannedId$, (data, dataChannelId) => ({ data, dataChannelId }))
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
    case SET_DATAPOINTS: {
      const { dataChannelId, data } = action.payload;

      return {
        ...state,
        [dataChannelId]: {
          ...state[dataChannelId],
          data,
        },
      };
    }

    case SET_QUERY: {
      const { dataChannelId, query } = action.payload;

      return {
        ...state,
        [dataChannelId]: {
          ...state[dataChannelId],
          query,
        },
      };
    }

    case APPEND_DATAPOINT: {
      const dataChannelId = action.payload.dataChannelId;
      const datapoints = R.pathOr([], [dataChannelId, 'data'])(state);
      const nextDatapoints = R.pipe(
        R.append({
          values: action.payload.values,
          // TODO: Should I create a new datetime here?
          updatedAt: action.payload.updatedAt || new Date().valueOf(),
        }),
        R.takeLast(100),
      )(datapoints);

      return {
        ...state,
        [dataChannelId]: {
          ...state[dataChannelId],
          data: nextDatapoints,
        },
      };
    }

    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
