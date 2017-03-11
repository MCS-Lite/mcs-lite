/* eslint key-spacing: 0 */

import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../datapoints';
import { actions as devicesActions } from '../devices';
import { assertSourcesSinks } from '../../utils/helpers';

describe('datapoints - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('datapoints - 2. Action Creators', () => {
  it('should return fetchDatapoints actions', () => {
    expect(actions.fetchDatapoints('deviceId', 'dataChannelId')).toMatchSnapshot();
  });

  it('should return setDatapoints actions', () => {
    expect(
      actions.setDatapoints({ data: [], dataChannelId: 'dataChannelId' }),
    ).toMatchSnapshot();
  });

  it('should return setQuery actions', () => {
    expect(
      actions.setQuery('dataChannelId', { query: 123 }),
    ).toMatchSnapshot();
  });

  it('should return appendDatapoint actions', () => {
    expect(actions.appendDatapoint({ dataChannelId: 'id', values: { value: 1 }})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

describe('datapoints - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with fetchDatapointsCycle', (done) => {
    const stateSource = {
      s: {
        devices: { deviceId445: { deviceKey: 'key556' }},
      },
      t: {
        devices: { deviceId445: { deviceKey: 'key556' }},
        datapoints: { dataChannelId778: { data: [], query: { start: 1, end: 2 }}},
      },
    };
    const actionSource = {
      a: actions.fetchDatapoints('deviceId445', 'dataChannelId778'),
    };
    const httpSource = {
      select: () => ({
        q: Observable.of({
          request: { url: '/api/devices/S1Mart-9g/datachannels/dataChannelId778/datapoints' },
          body: { data: [{ a: 1 }, { a: 2 }]},
        }),
        r: Observable.of({
          request: { url: '/api/devices/S1Mart-9g/datachannels/dataChannelId778/datapoints' },
          body: { data: [{ a: 3 }, { a: 4 }]},
        }),
      }),
    };

    const actionSink = {
      x: actions.setDatapoints({
        dataChannelId: 'dataChannelId778',
        data: [{ a: 1 }, { a: 2 }],
      }),
      y: actions.setDatapoints({
        dataChannelId: 'dataChannelId778',
        data: [{ a: 3 }, { a: 4 }],
      }),
    };
    const httpSink = {
      q: {
        url: '/api/devices/deviceId445/datachannels/dataChannelId778/datapoints',
        method: 'GET',
        headers: { deviceKey: 'key556' },
        category: 'datapoints',
        query: {},
      },
      r: {
        url: '/api/devices/deviceId445/datachannels/dataChannelId778/datapoints',
        method: 'GET',
        headers: { deviceKey: 'key556' },
        category: 'datapoints',
        query: { start: 1, end: 2 },
      },
    };

    assertSourcesSinks({
      STATE:  { '-s----t-|': stateSource }, // Remind: will get deviceKey later.
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----q--r|': httpSource },
    }, {
      HTTP:   { '-q----r-|': httpSink },
      ACTION: { '----x--y|': actionSink },
    }, cycles.fetchDatapointsCycle, done);
  });

  it('should emit correct Sinks given Sources with appendDatapointCycle', (done) => {
    const actionSource = {
      a: devicesActions.setDatapoint(
        'deviceId',
        { datachannelId: 'dataChannelId441', values: { a: 4 }},
        true,
      ),
    };

    const actionSink = {
      x: actions.appendDatapoint({ dataChannelId: 'dataChannelId441', values: { a: 4 }}),
    };

    assertSourcesSinks({
      ACTION: { 'a|': actionSource },
    }, {
      ACTION: { 'x|': actionSink },
    }, cycles.appendDatapointCycle, done);
  });
});

describe('datapoints - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DATAPOINTS', () => {
    const state = reducer({}, {
      type: constants.SET_DATAPOINTS,
      payload: { dataChannelId: 'datachannelId123', data: []},
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_QUERY', () => {
    const state = reducer(
      {
        datachannelId123: {
          data: [],
        },
      },
      {
        type: constants.SET_QUERY,
        payload: {
          dataChannelId: 'datachannelId123',
          query: { start: 123, end: 456 },
        },
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle APPEND_DATAPOINT', () => {
    const state = reducer(
      {
        dataChannelId4124: {
          query: {},
          data: [{ updatedAt: 1488938740201, values: { value: 1 }}],
        },
      },
      {
        type: constants.APPEND_DATAPOINT,
        payload: { dataChannelId: 'dataChannelId4124', updatedAt: 1488938740202, values: { value: 5 }},
      },
    );
    expect(state).toMatchSnapshot();
  });
});
