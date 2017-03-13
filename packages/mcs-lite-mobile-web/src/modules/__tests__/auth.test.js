/* eslint key-spacing: 0 */

import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../auth';
import { actions as routingActions } from '../routing';
import { actions as devicesActions } from '../devices';
import { actions as datapointsActions } from '../datapoints';
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

  it('should return changePassword actions', () => {
    expect(actions.changePassword({})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

jest.mock('../../utils/cookieHelper', () => ({
  getCookieToken: () => 'fakeCookieToken5',
  removeCookieToken: () => {},
}));

describe('auth - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with requireAuthCycle', (done) => {
    const actionSource = {
      a: actions.requireAuth(),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: { results: { a: 'a' }}}),
      }),
    };

    const actionSink = {
      x: actions.setUserInfo({ a: 'a' }),
    };
    const httpSink = {
      r: {
        url: '/oauth/cookies/mobile',
        method: 'POST',
        send: { token: 'fakeCookieToken5' },
        category: 'user',
      },
    };

    assertSourcesSinks({
      ACTION: { 'a----|': actionSource },
      HTTP:   { '----r|': httpSource },
    }, {
      HTTP:   { 'r----|': httpSink },
      ACTION: { '----x|': actionSink },
    }, cycles.requireAuthCycle, done);
  });

  it('should emit correct Sinks given Sources with tryEnterCycle', (done) => {
    const actionSource = {
      a: actions.tryEnter(),
    };

    const actionSink = {
      x: routingActions.pushPathname('/'),
    };

    assertSourcesSinks({
      ACTION: { 'a|': actionSource },
    }, {
      ACTION: { 'x|': actionSink },
    }, cycles.tryEnterCycle, done);
  });

  it('should emit correct Sinks given Sources with signoutCycle', (done) => {
    const actionSource = {
      a: actions.signout(),
    };

    const actionSink = {
      w: routingActions.pushPathname('/login'),
      x: actions.clear(),
      y: devicesActions.clear(),
      z: datapointsActions.clear(),
    };

    assertSourcesSinks({
      ACTION: { 'a-----|': actionSource },
    }, {
      ACTION: { '(wxyz)|': actionSink },
    }, cycles.signoutCycle, done);
  });

  it('should emit correct Sinks given Sources with changePasswordCycle', (done) => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken456' }},
    };
    const actionSource = {
      a: actions.changePassword({ password: '12332331', message: 'succesMessage' }),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({}),
      }),
    };

    const actionSink = {
      x: uiActions.addToast({
        kind: 'success',
        children: 'succesMessage',
      }),
    };
    const httpSink = {
      r: {
        url: '/api/users/changepassword',
        method: 'PUT',
        headers: { Authorization: 'Bearer faketoken456' },
        send: { password: '12332331' },
        category: 'changePassword',
      },
    };

    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { '----x---|': actionSink },
    }, cycles.changePasswordCycle, done);
  });

  it('should emit correct Sinks given Sources with authErrorCycle', (done) => {
    const httpSource = {
      select: () => ({
        r: Observable.throw({ ok: false, response: { body: { message: 'errorMessage' }}}),
      }),
    };

    const actionSink = {
      x: uiActions.addToast({
        kind: 'error',
        children: 'errorMessage',
      }),
      y: actions.signout('', true),
    };

    assertSourcesSinks(
      { HTTP:   { 'r---|': httpSource }},
      { ACTION: { '(xy|)': actionSink }},
      cycles.authErrorCycle, done,
    );
  });
});

describe('devices - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_USERINFO', () => {
    const state = reducer({}, {
      type: constants.SET_USERINFO,
      payload: { token: 'token' },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer(
      { token: 'token' },
      { type: constants.CLEAR },
    );
    expect(state).toMatchSnapshot();
  });
});
