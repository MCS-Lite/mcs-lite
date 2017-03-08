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
    expect(actions.setDatapoints([])).toMatchSnapshot();
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
      s: { devices: { deviceId445: { deviceKey: 'key556' }}},
    };
    const actionSource = {
      a: actions.fetchDatapoints('deviceId445', 'dataChannelId778'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { data: [{ a: 1 }, { a: 2 }]}}),
      }),
    };

    const actionSink = {
      x: actions.setDatapoints([{ a: 1 }, { a: 2 }]),
    };
    const httpSink = {
      r: {
        url: '/api/devices/deviceId445/datachannels/dataChannelId778/datapoints',
        method: 'GET',
        headers: { deviceKey: 'key556' },
        category: 'datapoints',
      },
    };

    assertSourcesSinks({
      STATE:  { '-s------|': stateSource }, // Remind: Test for getting deviceKey later.
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { '-r------|': httpSink },
      ACTION: { '----x---|': actionSink },
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
      payload: [
        { datachannelId: 'datachannelId123', others: {}},
      ],
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle APPEND_DATAPOINT', () => {
    const state = reducer(
      {
        dataChannelId4124: [
          { updatedAt: 1488938740201, values: { value: 1 }},
        ],
      },
      {
        type: constants.APPEND_DATAPOINT,
        payload: { dataChannelId: 'dataChannelId4124', updatedAt: 1488938740202, values: { value: 5 }},
      },
    );
    expect(state).toMatchSnapshot();
  });
});
