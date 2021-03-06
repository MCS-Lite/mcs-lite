/* eslint no-underscore-dangle: ["error", { "allow": ["__"] }] */

import { Observable } from 'rxjs/Observable';
import * as R from 'ramda';
import { readAsText } from 'promise-file-reader';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_USERS = 'mcs-lite-admin-web/user/FETCH_USERS';
const SET_USERS = 'mcs-lite-admin-web/user/SET_USERS';
const CREATE_USER = 'mcs-lite-admin-web/user/CREATE_USER';
const CREATE_USER_BY_CSV = 'mcs-lite-admin-web/user/CREATE_USER_BY_CSV';
const SET_USER = 'mcs-lite-admin-web/user/SET_USER';
const CHANGE_PASSWORD_BY_ID = 'mcs-lite-admin-web/user/CHANGE_PASSWORD_BY_ID';
const PUT_IS_ACTIVE_BY_ID = 'mcs-lite-admin-web/user/PUT_IS_ACTIVE_BY_ID';
const CHANGE_ACTIVE_BY_ID = 'mcs-lite-admin-web/user/CHANGE_ACTIVE_BY_ID';
const DELETE_USERS = 'mcs-lite-admin-web/user/DELETE_USERS';
const REMOVE_USERS_BY_ID = 'mcs-lite-admin-web/user/REMOVE_USERS_BY_ID';
const CLEAR = 'mcs-lite-admin-web/user/CLEAR';

export const constants = {
  FETCH_USERS,
  SET_USERS,
  CREATE_USER,
  CREATE_USER_BY_CSV,
  SET_USER,
  CHANGE_PASSWORD_BY_ID,
  PUT_IS_ACTIVE_BY_ID,
  CHANGE_ACTIVE_BY_ID,
  DELETE_USERS,
  REMOVE_USERS_BY_ID,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchUsers = () => ({ type: FETCH_USERS });
const setUsers = users => ({ type: SET_USERS, payload: users });
const createUser = (user, successMessage) => ({
  type: CREATE_USER,
  payload: { user, message: successMessage },
});
const createUserByCSV = (csv, successMessage) => ({
  type: CREATE_USER_BY_CSV,
  payload: { csv, message: successMessage },
});
const setUser = user => ({ type: SET_USER, payload: user });
const changePasswordById = (userId, password, successMessage) => ({
  type: CHANGE_PASSWORD_BY_ID,
  payload: { userId, password, message: successMessage },
});
const putIsActiveById = (userId, isActive, successMessage) => ({
  type: PUT_IS_ACTIVE_BY_ID,
  payload: { userId, isActive, message: successMessage },
});
const changeActiveById = (userId, isActive) => ({
  type: CHANGE_ACTIVE_BY_ID,
  payload: { userId, isActive },
});
const deleteUsers = (userIdList, successMessage) => ({
  type: DELETE_USERS,
  payload: { userIdList, message: successMessage },
});
const removeUsersById = userIdList => ({
  type: REMOVE_USERS_BY_ID,
  payload: userIdList,
});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchUsers,
  setUsers,
  createUser,
  createUserByCSV,
  setUser,
  changePasswordById,
  putIsActiveById,
  changeActiveById,
  deleteUsers,
  removeUsersById,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function fetchUsersCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const resNeedFetch = R.pathSatisfies(R.contains(R.__, [CREATE_USER_BY_CSV]), [
    'request',
    'category',
  ]);

  const request$ = Observable.merge(
    sources.ACTION.filter(action => action.type === FETCH_USERS),
    sources.HTTP.select()
      .concatMap(success)
      .filter(resNeedFetch),
  ).combineLatest(accessToken$, (s, accessToken) => ({
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

  const payload$ = sources.ACTION.filter(
    action => action.type === DELETE_USERS,
  ).pluck('payload');

  const userIdList$ = payload$.pluck('userIdList');
  const message$ = payload$.pluck('message');

  const request$ = userIdList$.withLatestFrom(
    accessToken$,
    (userIdList, accessToken) => ({
      url: '/api/users/delete',
      method: 'POST',
      send: { userId: userIdList },
      headers: { Authorization: `Bearer ${accessToken}` },
      category: DELETE_USERS,
    }),
  );

  const successRes$ = sources.HTTP.select(DELETE_USERS).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.pluck('request', 'send', 'userId').map(removeUsersById),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function createUserCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const payload$ = sources.ACTION.filter(
    action => action.type === CREATE_USER,
  ).pluck('payload');
  const user$ = payload$.pluck('user');
  const message$ = payload$.pluck('message');

  const request$ = user$.withLatestFrom(accessToken$, (user, accessToken) => ({
    url: '/api/users',
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    send: {
      ...user,
      isAdmin: false, // TODO: remove it.
    },
    category: CREATE_USER,
  }));

  const successRes$ = sources.HTTP.select(CREATE_USER).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.pluck('body').map(setUser),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function createUserByCSVCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const payload$ = sources.ACTION.filter(
    action => action.type === CREATE_USER_BY_CSV,
  ).pluck('payload');
  const csvContent$ = payload$
    .pluck('csv')
    .map(R.pipe(R.values, R.head))
    .switchMap(readAsText); // TODO: upload file api ?
  const message$ = payload$.pluck('message');

  const request$ = csvContent$.withLatestFrom(
    accessToken$,
    (csvContent, accessToken) => ({
      url: '/api/users.csv',
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      send: csvContent,
      type: 'text/csv',
      category: CREATE_USER_BY_CSV,
    }),
  );

  const successRes$ = sources.HTTP.select(CREATE_USER_BY_CSV).switchMap(
    success,
  );

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function changePasswordByIdCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const payload$ = sources.ACTION.filter(
    action => action.type === CHANGE_PASSWORD_BY_ID,
  ).pluck('payload');
  const message$ = payload$.pluck('message');

  const request$ = payload$.withLatestFrom(
    accessToken$,
    (payload, accessToken) => ({
      url: `/api/users/${payload.userId}`,
      method: 'PUT',
      headers: { Authorization: `Bearer ${accessToken}` },
      send: {
        password: payload.password,
      },
      category: CHANGE_PASSWORD_BY_ID,
    }),
  );

  const successRes$ = sources.HTTP.select(CHANGE_PASSWORD_BY_ID).switchMap(
    success,
  );

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function putIsActiveByIdCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const payload$ = sources.ACTION.filter(
    action => action.type === PUT_IS_ACTIVE_BY_ID,
  ).pluck('payload');
  const message$ = payload$.pluck('message');

  const request$ = payload$.withLatestFrom(
    accessToken$,
    (payload, accessToken) => ({
      url: `/api/users/${payload.userId}`,
      method: 'PUT',
      headers: { Authorization: `Bearer ${accessToken}` },
      send: {
        isActive: payload.isActive,
      },
      category: PUT_IS_ACTIVE_BY_ID,
    }),
  );

  const successRes$ = sources.HTTP.select(PUT_IS_ACTIVE_BY_ID).switchMap(
    success,
  );

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.map(res =>
      changeActiveById(
        // UserId by url ref: https://regex101.com/r/LQlWFg/1
        R.pipe(R.path(['request', 'url']), R.match(/([^/]*)$/), R.head)(res),
        // idActive by request data
        R.path(['request', 'send', 'isActive'])(res),
      ),
    ),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
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
  createUserCycle,
  createUserByCSVCycle,
  changePasswordByIdCycle,
  putIsActiveByIdCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case SET_USER:
      return R.prepend(action.payload)(state);
    case CHANGE_ACTIVE_BY_ID: {
      const { userId, isActive } = action.payload;
      const index = R.findIndex(R.propEq('userId', userId))(state);

      return R.set(R.lensPath([index, 'isActive']), isActive)(state);
    }
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
