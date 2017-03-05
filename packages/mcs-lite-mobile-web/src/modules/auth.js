/* global window */
/* eslint no-alert: 0 */

import { Observable } from 'rxjs/Observable';
// import R from 'ramda';
// import * as fetchRx from 'mcs-lite-fetch-rx';
import { actions as routingActions } from './routing';
import { actions as devicesActions } from './devices';
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

/**
 * requireConfirm
 * @return {Observable} original action$ or empty()
 *
 * @author Michael Hsu
 */

const requireConfirm = (action) => {
  const { message, isForce } = action.payload;
  if (isForce || window.confirm(message)) {
    return Observable.of(action);
  }
  return Observable.empty();
};

// const requireAuthEpic = action$ =>
//   action$
//     .ofType(REQUIRE_AUTH)
//     .map(cookieHelper.getCookieToken)
//     .switchMap(cookieToken =>
//       Observable
//         .from(fetchRx.fetchUserInfo(cookieToken))
//         .map(setUserInfo)
//         .catch(error => Observable.of(
//           uiActions.addToast({
//             kind: 'error',
//             children: R.is(String, error) ? error : error.message,
//           }),
//           signout('', true),
//         )),
//     );

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
    .map(setUserInfo);

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

// const tryEnterEpic = action$ =>
//   action$
//     .ofType(TRY_ENTER)
//     .map(cookieHelper.getCookieToken)
//     .filter(cookieToken => !!cookieToken) // Hint: Go to devices list if cookieToken avaliable
//     .mapTo(routingActions.pushPathname('/'));

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

// const signoutEpic = action$ =>
//   action$
//     .ofType(SIGNOUT)
//     .switchMap(requireConfirm)
//     .switchMap(() => Observable.of(
//       routingActions.pushPathname('/signin'),
//       clear(),
//       devicesActions.clear(),
//     ))
//     .do(cookieHelper.removeCookieToken);

function signoutCycle(sources) {
  const confirm$ = sources.ACTION
    .filter(action => action.type === SIGNOUT)
    .switchMap(requireConfirm);

  const action$ = confirm$
    .switchMap(() => Observable.of(
      routingActions.pushPathname('/signin'),
      clear(),
      devicesActions.clear(),
    ))
    .do(cookieHelper.removeCookieToken);

  return {
    ACTION: action$,
  };
}

// const changePasswordEpic = (action$, store) =>
//   action$
//     .ofType(CHANGE_PASSWORD)
//     .pluck('payload')
//     .switchMap(({ password, message }) => Observable
//       .from(fetchRx.changePassword({ password }, store.getState().auth.access_token))
//       .mapTo(uiActions.addToast({
//         kind: 'success',
//         children: message,
//       }))
//       .catch(error => Observable.of(uiActions.addToast({
//         kind: 'error',
//         children: error.error_description,
//       }))),
//     );

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

export const cycles = {
  requireAuthCycle,
  tryEnterCycle,
  signoutCycle,
  changePasswordCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
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
