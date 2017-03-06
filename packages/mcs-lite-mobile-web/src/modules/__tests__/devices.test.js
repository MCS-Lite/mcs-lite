/* eslint key-spacing: 0 */

import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../devices';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('devices - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('devices - 2. Action Creators', () => {
  it('should return fetchDeviceList actions', () => {
    expect(actions.fetchDeviceList()).toMatchSnapshot();
  });

  it('should return fetchDeviceDetail actions', () => {
    expect(actions.fetchDeviceDetail('deviceId')).toMatchSnapshot();
  });

  it('should return setDeviceList actions', () => {
    expect(actions.setDeviceList([])).toMatchSnapshot();
  });

  it('should return setDeviceDetail actions', () => {
    expect(actions.setDeviceDetail({})).toMatchSnapshot();
  });

  it('should return setDatapoint actions', () => {
    expect(actions.setDatapoint('deviceId', {})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

describe('devices - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with fetchDeviceListCycle', (done) => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' }},
    };
    const actionSource = {
      a: actions.fetchDeviceList(),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { data: { a: 'a' }}}),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setDeviceList({ a: 'a' }),
      z: uiActions.setLoaded(),
    };
    const httpSink = {
      r: {
        url: '/api/devices',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: 'devices',
      },
    };

    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---(yz)|': actionSink },
    }, cycles.fetchDeviceListCycle, done);
  });

  it('should emit correct Sinks given Sources with fetchDeviceDetailCycle', (done) => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken456' }},
    };
    const actionSource = {
      a: actions.fetchDeviceDetail('fakedeviceid123'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { data: { b: 'b' }}}),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setDeviceDetail({ b: 'b' }),
      z: uiActions.setLoaded(),
    };
    const httpSink = {
      r: {
        url: '/api/devices/fakedeviceid123',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken456' },
        category: 'deviceDetail',
      },
    };

    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---(yz)|': actionSink },
    }, cycles.fetchDeviceDetailCycle, done);
  });
});

describe('devices - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DEVICE_LIST', () => {
    const state = reducer({}, {
      type: constants.SET_DEVICE_LIST,
      payload: [
        { deviceId: 'deviceId_1' },
      ],
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DEVICE_DETAIL', () => {
    const state = reducer({}, {
      type: constants.SET_DEVICE_DETAIL,
      payload: { deviceId: 'deviceId_1' },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DATAPOINT', () => {
    const state = reducer(
      {
        deviceId_1: {
          datachannels: [
            { datachannelId: 'datachannelId', datapoints: null },
          ],
        },
      },
      {
        type: constants.SET_DATAPOINT,
        payload: {
          deviceId: 'deviceId_1',
          datapoint: { datachannelId: 'datachannelId', values: { value: 1 }},
        },
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer(
      { deviceId: 'deviceId_1' },
      { type: constants.CLEAR },
    );
    expect(state).toMatchSnapshot();
  });
});
