/* eslint no-underscore-dangle: ["error", { "allow": ["__"] }] */

import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_USERS = 'mcs-lite-admin-web/user/FETCH_USERS';
const SET_USERS = 'mcs-lite-admin-web/user/SET_USERS';
const DELETE_USERS = 'mcs-lite-admin-web/user/DELETE_USERS';
const REMOVE_USERS_BY_ID = 'mcs-lite-admin-web/user/REMOVE_USERS_BY_ID';
const CLEAR = 'mcs-lite-admin-web/user/CLEAR';

export const constants = {
  FETCH_USERS,
  SET_USERS,
  DELETE_USERS,
  REMOVE_USERS_BY_ID,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchUsers = () => ({ type: FETCH_USERS });
const setUsers = users => ({ type: SET_USERS, payload: users });
const deleteUsers = userIdList => ({ type: DELETE_USERS, payload: userIdList });
const removeUsersById = userIdList => ({
  type: REMOVE_USERS_BY_ID,
  payload: userIdList,
});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchUsers,
  setUsers,
  deleteUsers,
  removeUsersById,
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

function deleteUsersCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const userIdList$ = sources.ACTION
    .filter(action => action.type === DELETE_USERS)
    .pluck('payload');

  const request$ = userIdList$.withLatestFrom(
    accessToken$,
    (userIdList, accessToken) => ({
      url: `/api/users/${userIdList.join(',')}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: DELETE_USERS,
    }),
  );

  const successRes$ = sources.HTTP.select(DELETE_USERS).switchMap(success);

  // Remind: api response with type(settingId) will be better.
  // ref: https://regex101.com/r/LQlWFg/1
  const responseUserIdList$ = successRes$
    .pluck('request', 'url')
    .map(R.pipe(R.match(/([^/]*)$/), R.head))
    .map(R.split(','));

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    responseUserIdList$.map(removeUsersById),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
  fetchUsersCycle,
  deleteUsersCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case REMOVE_USERS_BY_ID:
      // TODO: should we use two nested for-loop?
      return R.reject(
        R.pipe(R.prop('userId'), R.contains(R.__, action.payload)),
      )(state);
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
