/* global window */
/* eslint no-alert: 0 */

import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as routingActions } from './routing';
import { actions as devicesActions } from './devices';
import { actions as datapointsActions } from './datapoints';
import { actions as uiActions } from './ui';
import cookieHelper from '../utils/cookieHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const REQUIRE_AUTH = 'mcs-lite-mobile-web/auth/REQUIRE_AUTH';
const TRY_ENTER = 'mcs-lite-mobile-web/auth/TRY_ENTER';
const SIGNOUT = 'mcs-lite-mobile-web/auth/SIGNOUT';
const CHANGE_PASSWORD = 'mcs-lite-mobile-web/auth/CHANGE_PASSWORD';
const SET_USERINFO = 'mcs-lite-mobile-web/auth/SET_USERINFO';
const CLEAR = 'mcs-lite-mobile-web/auth/CLEAR';

export const constants = {
  REQUIRE_AUTH,
  TRY_ENTER,
  SIGNOUT,
  CHANGE_PASSWORD,
  SET_USERINFO,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const requireAuth = () => ({ type: REQUIRE_AUTH });
const tryEnter = () => ({ type: TRY_ENTER });
const signout = (message, isForce) => ({ type: SIGNOUT, payload: { message, isForce }});
const setUserInfo = payload => ({ type: SET_USERINFO, payload });
const changePassword = ({ password, message }) =>
  ({ type: CHANGE_PASSWORD, payload: { password, message }});
const clear = () => ({ type: CLEAR });

export const actions = {
  requireAuth,
  tryEnter,
  signout,
  setUserInfo,
  changePassword,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function requireAuthCycle(sources) {
  const cookieToken$ = sources.ACTION
    .filter(action => action.type === REQUIRE_AUTH)
    .map(cookieHelper.getCookieToken);

  const request$ = cookieToken$
    .map(cookieToken => ({
      url: '/oauth/cookies/mobile',
      method: 'POST',
      send: { token: cookieToken },
      category: 'user',
    }));

  const response$ = sources.HTTP
    .select('user')
    .switch();

  const action$ = response$
    .pluck('body', 'results')
    .map(setUserInfo)
    // TODO: Should I catch response$ error here ?
    .catch((error) => {
      console.error({ error }); // eslint-disable-line
      return Observable.empty();
    });

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function tryEnterCycle(sources) {
  const cookieToken$ = sources.ACTION
    .filter(action => action.type === TRY_ENTER)
    .map(cookieHelper.getCookieToken);

  const action$ = cookieToken$
    .filter(cookieToken => !!cookieToken) // Hint: Go to devices list if cookieToken avaliable
    .mapTo(routingActions.pushPathname('/'));

  return {
    ACTION: action$,
  };
}

function signoutCycle(sources) {
  const confirm$ = sources.ACTION
    .filter(action => action.type === SIGNOUT)
    .switchMap((action) => {
      const { message, isForce } = action.payload;
      if (isForce || window.confirm(message)) {
        return Observable.of(action);
      }
      return Observable.empty();
    });

  const action$ = confirm$
    .switchMap(() => Observable.of(
      routingActions.pushPathname('/login'),
      clear(),
      devicesActions.clear(),
      datapointsActions.clear(),
    ))
    .do(cookieHelper.removeCookieToken);

  return {
    ACTION: action$,
  };
}

function changePasswordCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(d => !!d)
    .distinctUntilChanged();

  const payload$ = sources.ACTION
    .filter(action => action.type === CHANGE_PASSWORD)
    .pluck('payload');

  const password$ = payload$.pluck('password');
  const message$ = payload$.pluck('message');

  const request$ = password$
    .withLatestFrom(accessToken$)
    .map(([password, accessToken]) => ({
      url: '/api/users/changepassword',
      method: 'PUT',
      headers: { Authorization: `Bearer ${accessToken}` },
      send: { password },
      category: 'changePassword',
    }));

  const response$ = sources.HTTP
    .select('changePassword')
    .switch();

  const action$ = response$
    .withLatestFrom(message$)
    .map(([, message]) => uiActions.addToast({
      kind: 'success',
      children: message,
    }));

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function authErrorCycle(sources) {
  const errorMessage$ = sources.HTTP
    .select() // TODO: Should I use .select('user') ?
    .switch()
    .pluck('ok')
    .filter(R.not)
    .catch(({ response }) => Observable.of(response.body.message));

  const action$ = errorMessage$
    .concatMap(message => Observable.of(
      uiActions.addToast({ kind: 'error', children: message }),
      signout('', true), // Remind: Force signout
    ));

  return {
    ACTION: action$,
  };
}

export const cycles = {
  requireAuthCycle,
  tryEnterCycle,
  signoutCycle,
  changePasswordCycle,
  authErrorCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
