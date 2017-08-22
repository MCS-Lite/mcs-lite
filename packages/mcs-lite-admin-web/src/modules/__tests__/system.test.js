import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../system';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('system - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('system - 2. Action Creators', () => {
  it('should return fetchSystemByType actions', () => {
    expect(actions.fetchSystemByType('payload')).toMatchSnapshot();
  });

  it('should return uploadSystemByType actions', () => {
    expect(actions.uploadSystemByType('type', 'message')).toMatchSnapshot();
  });

  it('should return postReset actions', () => {
    expect(actions.postReset('message')).toMatchSnapshot();
  });

  it('should return setSystemByType actions', () => {
    expect(
      actions.setSystemByType({
        data: 'data',
        type: 'type',
      }),
    ).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

describe('system - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with fetchSystemByTypeCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.fetchSystemByType('type1'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: { data: { a: 'a' } },
          request: {
            url: '/api/service/type1',
          },
        }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setSystemByType({
        data: `{\n\t"a": "a"\n}`,
        type: 'type1',
      }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/service/type1',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.FETCH_SYSTEM_BY_TYPE,
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
    }, cycles.fetchSystemByTypeCycle, done);
  });

  it('should emit correct Sinks given Sources with uploadSystemByTypeCycle', done => {
    const stateSource = {
      s: {
        auth: { access_token: 'faketoken123' },
        system: {
          type1: `{\n\t"a": "a"\n}`,
        },
      },
    };
    const actionSource = {
      a: actions.uploadSystemByType('type1', 'message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: {} }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({
        kind: 'success',
        children: 'message',
      }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/service/type1',
        method: 'PUT',
        send: { content: { a: 'a' } },
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.UPLOAD_SYSTEM_BY_TYPE,
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
    }, cycles.uploadSystemByTypeCycle, done);
  });

  it('should emit correct Sinks given Sources with postResetCycle', done => {
    const stateSource = {
      s: {
        auth: { access_token: 'faketoken123' },
      },
    };
    const actionSource = {
      a: actions.postReset('message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: {} }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({
        kind: 'success',
        children: 'message',
      }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/service/reset',
        method: 'POST',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.POST_RESET,
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
    }, cycles.postResetCycle, done);
  });
});

describe('system - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_SYSTEM_BY_TYPE', () => {
    const state = reducer([], {
      type: constants.SET_SYSTEM_BY_TYPE,
      payload: {
        data: 'data',
        type: 'db',
      },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer({ db: '1123' }, { type: constants.CLEAR });
    expect(state).toMatchSnapshot();
  });
});
