import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SIGNIN = 'mcs-lite-mobile-web/auth/SIGNIN';
const SET_COOKIE = 'mcs-lite-mobile-web/auth/SET_COOKIE';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const signin = () => ({ type: SIGNIN });
const setCookie = payload => ({ type: SET_COOKIE, payload });

export const actions = {
  signin,
  setCookie,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const signinEpic = action$ =>
  action$
    .ofType(SIGNIN)
    .switchMap(() => Observable.merge(
      Observable.of(setCookie('cookie_secret')),
      Observable.of(push('/devices')),
    ));

export const epics = [
  signinEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  cookie: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_COOKIE:
      return {
        ...state,
        cookie: action.payload,
      };
    default:
      return state;
  }
}
