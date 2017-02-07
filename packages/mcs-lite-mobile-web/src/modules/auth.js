import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { actions as devicesActions } from './devices';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SIGNIN = 'mcs-lite-mobile-web/auth/SIGNIN';
const SIGNOUT = 'mcs-lite-mobile-web/auth/SIGNOUT';
const SET_USERINFO = 'mcs-lite-mobile-web/auth/SET_USERINFO';
const CLEAR_USERINFO = 'mcs-lite-mobile-web/auth/CLEAR_USERINFO';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const signin = ({ account, password }) => ({ type: SIGNIN, payload: { account, password }});
const signout = () => ({ type: SIGNOUT });
const setUserInfo = payload => ({ type: SET_USERINFO, payload });
const clearUserInfo = () => ({ type: CLEAR_USERINFO });

export const actions = {
  signin,
  signout,
  setUserInfo,
  clearUserInfo,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const signinEpic = action$ =>
  action$
    .ofType(SIGNIN)
    .map(payload => ({
      username: 'Michael Hsu',
      image: 'http://placehold.it/350x150',
      cookie: 'cookie_secret',
      ...payload,
    }))
    .switchMap(userInfo => Observable.merge(
      Observable.of(setUserInfo(userInfo)),
      Observable.of(push('/devices')),
    ));

const signoutEpic = action$ =>
  action$
    .ofType(SIGNOUT)
    .switchMap(() => Observable.merge(
      Observable.of(clearUserInfo()),
      Observable.of(devicesActions.clearDevices()),
      Observable.of(push('/')),
    ));


export const epics = [
  signinEpic,
  signoutEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  cookie: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USERINFO:
      return initialState;
    default:
      return state;
  }
}
