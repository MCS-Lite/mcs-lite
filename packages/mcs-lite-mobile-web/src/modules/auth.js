import { Observable } from 'rxjs/Observable';
import * as fetchRx from 'mcs-lite-fetch-rx';
import cookie from 'react-cookie';
import { actions as routingActions } from './routing';
import { actions as devicesActions } from './devices';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const REQUIRE_AUTH = 'mcs-lite-mobile-web/auth/REQUIRE_AUTH';
const SIGNOUT = 'mcs-lite-mobile-web/auth/SIGNOUT';
const CHANGE_PASSWORD = 'mcs-lite-mobile-web/auth/CHANGE_PASSWORD';
export const SET_USERINFO = 'mcs-lite-mobile-web/auth/SET_USERINFO';
const CLEAR = 'mcs-lite-mobile-web/auth/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const requireAuth = () => ({ type: REQUIRE_AUTH });
const signout = () => ({ type: SIGNOUT });
const setUserInfo = payload => ({ type: SET_USERINFO, payload });
const changePassword = ({ old, new1, new2 }) =>
  ({ type: CHANGE_PASSWORD, payload: { old, new1, new2 }});
const clear = () => ({ type: CLEAR });

export const actions = {
  requireAuth,
  signout,
  setUserInfo,
  changePassword,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const requireAuthEpic = action$ =>
  action$
    .ofType(REQUIRE_AUTH)
    .map(() => cookie.load('token'))
    .switchMap(cookieToken => Observable.from(fetchRx.fetchUserInfo(cookieToken)))
    .map(setUserInfo)
    .catch((data) => {
      // TODO: toast ?
      console.error(data); // eslint-disable-line
      return Observable.of(routingActions.pushPathname('/signin'));
    });

const signoutEpic = action$ =>
  action$
    .ofType(SIGNOUT)
    .switchMap(() => Observable.merge(
      Observable.of(routingActions.pushPathname('/signin')),
      Observable.of(clear()),
      Observable.of(devicesActions.clear()),
    ))
    .do(() => cookie.remove('token', { path: '/' }));

const changePasswordEpic = action$ =>
  action$
    .ofType(CHANGE_PASSWORD)
    .delay(1000)
    .mapTo('success');

export const epics = [
  requireAuthEpic,
  signoutEpic,
  changePasswordEpic,
];

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
