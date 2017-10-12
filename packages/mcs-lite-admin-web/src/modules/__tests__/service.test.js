import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../service';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('service - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('service - 2. Action Creators', () => {
  it('should return start actions', () => {
    expect(actions.start('message')).toMatchSnapshot();
  });

  it('should return stop actions', () => {
    expect(actions.stop('message')).toMatchSnapshot();
  });

  it('should return restart actions', () => {
    expect(actions.restart('message')).toMatchSnapshot();
  });

  it('should return fetchIpList actions', () => {
    expect(actions.fetchIpList()).toMatchSnapshot();
  });

  it('should return setIpList actions', () => {
    expect(actions.setIpList([1, 2, 3])).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

describe('service - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with startCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.start('message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: {} }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
    };

    const httpSink = {
      r: {
        url: '/api/service/start',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.START,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---y---|': actionSink },
    }, cycles.startCycle, done);
  });

  it('should emit correct Sinks given Sources with stopCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.stop('message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: {} }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
    };

    const httpSink = {
      r: {
        url: '/api/service/stop',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.STOP,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---y---|': actionSink },
    }, cycles.stopCycle, done);
  });

  it('should emit correct Sinks given Sources with restartCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.restart('message'),
    };
    const httpSource = {
      select: category => ({
        r: category === `${constants.RESTART}_STOP`
          ? Observable.of({ body: {} })
          : Observable.empty(),
        s: category === `${constants.RESTART}_START`
          ? Observable.of({ body: {} })
          : Observable.empty(),
      }),
    };
    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
    };

    const httpSink = {
      r: {
        url: '/api/service/stop',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: `${constants.RESTART}_STOP`,
      },
      s: {
        url: '/api/service/start',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: `${constants.RESTART}_START`,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r--s|': httpSource },
    }, {
      HTTP:   { 'r---s---|': httpSink },
      ACTION: { 'x------y|': actionSink },
    }, cycles.restartCycle, done);
  });

  it('should emit correct Sinks given Sources with fetchIpListCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.fetchIpList(),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { data: [1, 2, 3] } }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setIpList([1, 2, 3]),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/ip',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.FETCH_IP_LIST,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---(yz)|': actionSink },
    }, cycles.fetchIpListCycle, done);
  });

  it('should emit correct Sinks given Sources with fetchIpListCycle after response', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {};
    const httpSource = {
      select: category => ({
        r: category !== constants.FETCH_IP_LIST
          ? Observable.of({
              request: { category: constants.STOP },
            })
          : Observable.empty(),
        s: category === constants.FETCH_IP_LIST
          ? Observable.of({
              body: { data: [4, 5, 6] },
            })
          : Observable.empty(),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setIpList([4, 5, 6]),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/ip',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.FETCH_IP_LIST,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's------------|': stateSource },
      ACTION: { '-------------|': actionSource },
      HTTP:   { '---r---s-----|': httpSource },
    }, {
      HTTP:   { '---r---------|': httpSink },
      ACTION: { '---x---(yz)--|': actionSink },
    }, cycles.fetchIpListCycle, done);
  });
});

describe('service - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_IP_LIST', () => {
    const state = reducer([], {
      type: constants.SET_IP_LIST,
      payload: [1, 2, 3],
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer([1, 2, 3], { type: constants.CLEAR });
    expect(state).toMatchSnapshot();
  });
});
