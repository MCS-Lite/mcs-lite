/* eslint key-spacing: 0 */

import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import reducer, { constants, actions, cycles } from '../auth';
import { actions as serviceActions } from '../service';
import { actions as systemActions } from '../system';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('auth - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('auth - 2. Action Creators', () => {
  it('should return requireAuth actions', () => {
    expect(actions.requireAuth()).toMatchSnapshot();
  });

  it('should return tryEnter actions', () => {
    expect(actions.tryEnter()).toMatchSnapshot();
  });

  it('should return signout actions', () => {
    expect(actions.signout('payload', false)).toMatchSnapshot();
  });

  it('should return setUserInfo actions', () => {
    expect(actions.setUserInfo('payload')).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

jest.mock('mcs-lite-ui/lib/utils/cookieHelper', () => ({
  getCookieToken: () => 'fakeCookieToken5',
  removeCookieToken: () => {},
}));

describe('auth - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with requireAuthCycle', done => {
    const actionSource = {
      a: actions.requireAuth(),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { results: { a: 'a' } } }),
      }),
    };

    const actionSink = {
      x: actions.setUserInfo({ a: 'a' }),
      y: serviceActions.fetchIpList(),
    };
    const httpSink = {
      r: {
        url: '/oauth/cookies',
        method: 'POST',
        send: { token: 'fakeCookieToken5' },
        category: constants.REQUIRE_AUTH,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { '----(xy)|': actionSink },
    }, cycles.requireAuthCycle, done);
  });

  it('should emit correct Sinks given Sources with tryEnterCycle', done => {
    const actionSource = {
      a: actions.tryEnter(),
    };

    const actionSink = {
      x: push('/'),
    };

    // prettier-ignore
    assertSourcesSinks({
      ACTION: { 'a|': actionSource },
    }, {
      ACTION: { 'x|': actionSink },
    }, cycles.tryEnterCycle, done);
  });

  it('should emit correct Sinks given Sources with signoutCycle', done => {
    const actionSource = {
      a: actions.signout(),
    };

    const actionSink = {
      w: push('/login'),
      x: actions.clear(),
      y: serviceActions.clear(),
      z: systemActions.clear(),
    };

    // prettier-ignore
    assertSourcesSinks({
      ACTION: { 'a-----|': actionSource },
    }, {
      ACTION: { '(wxyz)|': actionSink },
    }, cycles.signoutCycle, done);
  });

  it('should emit correct Sinks given Sources with httpErrorCycle', done => {
    const httpSource = {
      select: () => ({
        r: Observable.throw({
          response: {
            status: 401,
            statusText: 'errorMessage',
          },
        }),
      }),
    };

    const actionSink = {
      x: uiActions.addToast({
        kind: 'error',
        children: ' (401 errorMessage)',
      }),
      y: uiActions.setLoaded(),
      z: actions.signout('', true),
    };

    // prettier-ignore
    assertSourcesSinks(
      { HTTP:   { 'r----|': httpSource } },
      { ACTION: { '(xyz)|': actionSink } },
      cycles.httpErrorCycle, done,
    );
  });
});

describe('devices - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_USERINFO', () => {
    const state = reducer(
      {},
      {
        type: constants.SET_USERINFO,
        payload: { token: 'token' },
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer({ token: 'token' }, { type: constants.CLEAR });
    expect(state).toMatchSnapshot();
  });
});
