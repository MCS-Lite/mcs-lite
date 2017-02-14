import { Observable } from 'rxjs/Observable';
import cookie from 'react-cookie';
import { actions as routingActions } from './routing';
import { actions as devicesActions } from './devices';
// import { actions as uiActions } from './ui';
import fetchUser from './fetch-rx/fetchUser';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

// const SIGNIN = 'mcs-lite-mobile-web/auth/SIGNIN';
const REQUIRE_AUTH = 'mcs-lite-mobile-web/auth/REQUIRE_AUTH';
const SIGNOUT = 'mcs-lite-mobile-web/auth/SIGNOUT';
const CHANGE_PASSWORD = 'mcs-lite-mobile-web/auth/CHANGE_PASSWORD';
export const SET_USERINFO = 'mcs-lite-mobile-web/auth/SET_USERINFO';
const CLEAR = 'mcs-lite-mobile-web/auth/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

// const signin = ({ email, password }) => ({ type: SIGNIN, payload: { email, password }});
const requireAuth = () => ({ type: REQUIRE_AUTH });
const signout = () => ({ type: SIGNOUT });
const setUserInfo = payload => ({ type: SET_USERINFO, payload });
const changePassword = ({ old, new1, new2 }) =>
  ({ type: CHANGE_PASSWORD, payload: { old, new1, new2 }});
const clear = () => ({ type: CLEAR });

export const actions = {
  // signin,
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
    .switchMap(fetchUser)
    .map(setUserInfo)
    .catch(Observable.of(routingActions.pushPathname('/signin')));

const signoutEpic = action$ =>
  action$
    .ofType(SIGNOUT)
    .switchMap(() => Observable.merge(
      Observable.of(routingActions.pushPathname('/')),
      Observable.of(clear()),
      Observable.of(devicesActions.clear()),
    ));

const changePasswordEpic = action$ =>
  action$
    .ofType(CHANGE_PASSWORD)
    .delay(1000)
    .mapTo('success');

const clearEpic = action$ =>
  action$
    .ofType(CLEAR)
    .do(() => cookie.remove('token'));

export const epics = [
  requireAuthEpic,
  signoutEpic,
  changePasswordEpic,
  clearEpic,
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
