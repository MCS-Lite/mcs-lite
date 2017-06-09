/* global window */
/* eslint no-alert: 0 */

import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { actions as ipsActions } from './ips';
import { actions as systemActions } from './system';
import { actions as uiActions } from './ui';
import cookieHelper from '../utils/cookieHelper';
import { success, failure } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const REQUIRE_AUTH = 'mcs-lite-admin-web/auth/REQUIRE_AUTH';
const TRY_ENTER = 'mcs-lite-admin-web/auth/TRY_ENTER';
const SIGNOUT = 'mcs-lite-admin-web/auth/SIGNOUT';
const SET_USERINFO = 'mcs-lite-admin-web/auth/SET_USERINFO';
const CLEAR = 'mcs-lite-admin-web/auth/CLEAR';

export const constants = {
  REQUIRE_AUTH,
  TRY_ENTER,
  SIGNOUT,
  SET_USERINFO,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const requireAuth = () => ({ type: REQUIRE_AUTH });
const tryEnter = () => ({ type: TRY_ENTER });
const signout = (confirmMessage, isForce) => ({
  type: SIGNOUT,
  payload: { message: confirmMessage, isForce },
});
const setUserInfo = userData => ({ type: SET_USERINFO, payload: userData });
const clear = () => ({ type: CLEAR });

export const actions = {
  requireAuth,
  tryEnter,
  signout,
  setUserInfo,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function requireAuthCycle(sources) {
  const cookieToken$ = sources.ACTION
    .filter(action => action.type === REQUIRE_AUTH)
    .map(cookieHelper.getCookieToken);

  const request$ = cookieToken$.map(cookieToken => ({
    url: '/oauth/cookies',
    method: 'POST',
    send: { token: cookieToken },
    category: REQUIRE_AUTH,
  }));

  const successRes$ = sources.HTTP.select(REQUIRE_AUTH).switchMap(success);

  const action$ = successRes$.pluck('body', 'results').map(setUserInfo);

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
    .mapTo(push('/'));

  return {
    ACTION: action$,
  };
}

function signoutCycle(sources) {
  const confirm$ = sources.ACTION
    .filter(action => action.type === SIGNOUT)
    .switchMap(action => {
      const { message, isForce } = action.payload;
      if (isForce || window.confirm(message)) {
        return Observable.of(action);
      }
      return Observable.empty();
    });

  const action$ = confirm$
    .switchMap(() =>
      Observable.of(
        push('/login'),
        clear(),
        ipsActions.clear(),
        systemActions.clear(),
      ),
    )
    .do(cookieHelper.removeCookieToken);

  return {
    ACTION: action$,
  };
}

function httpErrorCycle(sources) {
  // Remind: handle all http errors here
  const failureRes$ = sources.HTTP
    .select()
    .switchMap(failure)
    .pluck('response')
    .do(response => console.log('httpErrorCycle', response)); // eslint-disable-line

  const action$ = failureRes$.concatMap(({ status, statusText }) => {
    const shouldSignout = status === 401;

    return Observable.of(
      uiActions.addToast({
        kind: 'error',
        children: ` (${status} ${statusText})`,
      }),
      uiActions.setLoaded(), // Hint: set loading anyway
      shouldSignout ? signout('', true) : {}, // Remind: Force signout
    );
  });

  return {
    ACTION: action$,
  };
}

export const cycles = {
  requireAuthCycle,
  tryEnterCycle,
  signoutCycle,
  httpErrorCycle,
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
