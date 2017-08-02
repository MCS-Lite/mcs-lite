import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_USERS = 'mcs-lite-admin-web/user/FETCH_USERS';
const SET_USERS = 'mcs-lite-admin-web/user/SET_USERS';
const CLEAR = 'mcs-lite-admin-web/user/CLEAR';

export const constants = {
  FETCH_USERS,
  SET_USERS,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchUsers = () => ({ type: FETCH_USERS });
const setUsers = users => ({ type: SET_USERS, payload: users });
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchUsers,
  setUsers,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function fetchUsersCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const request$ = sources.ACTION
    .filter(action => action.type === FETCH_USERS)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/users',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: FETCH_USERS,
    }));

  const successRes$ = sources.HTTP.select(FETCH_USERS).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.pluck('body').map(setUsers),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
  fetchUsersCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
