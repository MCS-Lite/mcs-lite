/* global window */
/* eslint no-alert: 0 */

import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import * as fetchRx from 'mcs-lite-fetch-rx';
import { actions as routingActions } from './routing';
import { actions as devicesActions } from './devices';
import { actions as uiActions } from './ui';
import { getCookieToken, removeCookieToken } from '../utils/cookieHelper';

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
// 3. Epic (Async, side effect)
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

const requireAuthEpic = action$ =>
  action$
    .ofType(REQUIRE_AUTH)
    .map(getCookieToken)
    .switchMap(cookieToken =>
      Observable
        .from(fetchRx.fetchUserInfo(cookieToken))
        .map(setUserInfo)
        .catch(error => Observable.of(
          uiActions.addToast({
            kind: 'error',
            children: R.is(String, error) ? error : error.message,
          }),
          signout('', true),
        )),
    );

const tryEnterEpic = action$ =>
  action$
    .ofType(TRY_ENTER)
    .map(getCookieToken) // Remind: DO NOT use mapTo or you will get old cookie object.
    .filter(cookieToken => !!cookieToken) // Hint: Go to devices list if cookieToken avaliable
    .mapTo(routingActions.pushPathname('/'));

const signoutEpic = action$ =>
  action$
    .ofType(SIGNOUT)
    .switchMap(requireConfirm)
    .switchMap(() => Observable.of(
      routingActions.pushPathname('/signin'),
      clear(),
      devicesActions.clear(),
    ))
    .do(removeCookieToken);

const changePasswordEpic = (action$, store) =>
  action$
    .ofType(CHANGE_PASSWORD)
    .pluck('payload')
    .switchMap(({ password, message }) => Observable
      .from(fetchRx.changePassword({ password }, store.getState().auth.access_token))
      .mapTo(uiActions.addToast({
        kind: 'success',
        children: message,
      }))
      .catch(error => Observable.of(uiActions.addToast({
        kind: 'error',
        children: error.error_description,
      }))),
    );

export const epics = {
  requireAuthEpic,
  tryEnterEpic,
  signoutEpic,
  changePasswordEpic,
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
