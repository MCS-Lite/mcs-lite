/* eslint no-underscore-dangle: ["error", { "allow": ["__"] }] */

import { Observable } from 'rxjs/Observable';
import * as R from 'ramda';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const START = 'mcs-lite-admin-web/service/START';
const STOP = 'mcs-lite-admin-web/service/STOP';
const RESTART = 'mcs-lite-admin-web/service/RESTART';
const FETCH_IP_LIST = 'mcs-lite-admin-web/service/FETCH_IP_LIST';
const SET_IP_LIST = 'mcs-lite-admin-web/service/SET_IP_LIST';
const CLEAR = 'mcs-lite-admin-web/service/CLEAR';

export const constants = {
  START,
  STOP,
  RESTART,
  FETCH_IP_LIST,
  SET_IP_LIST,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const start = message => ({ type: START, payload: message });
const stop = message => ({ type: STOP, payload: message });
const restart = message => ({ type: RESTART, payload: message });
const fetchIpList = () => ({ type: FETCH_IP_LIST });
const setIpList = ipList => ({ type: SET_IP_LIST, payload: ipList });
const clear = () => ({ type: CLEAR });

export const actions = {
  start,
  stop,
  restart,
  fetchIpList,
  setIpList,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function startCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const message$ = sources.ACTION.filter(action => action.type === START).pluck(
    'payload',
  );

  const request$ = sources.ACTION.filter(
    action => action.type === START,
  ).combineLatest(accessToken$, (action, accessToken) => ({
    url: '/api/service/start',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    category: START,
  }));

  const successRes$ = sources.HTTP.select(START).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function stopCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const message$ = sources.ACTION.filter(action => action.type === STOP).pluck(
    'payload',
  );

  const request$ = sources.ACTION.filter(
    action => action.type === STOP,
  ).combineLatest(accessToken$, (action, accessToken) => ({
    url: '/api/service/stop',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    category: STOP,
  }));

  const successRes$ = sources.HTTP.select(STOP).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function restartCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);
  const message$ = sources.ACTION.filter(
    action => action.type === RESTART,
  ).pluck('payload');

  const stopRequest$ = sources.ACTION.filter(
    action => action.type === RESTART,
  ).combineLatest(accessToken$, (action, accessToken) => ({
    url: '/api/service/stop',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    category: `${RESTART}_STOP`,
  }));

  const successStopRes$ = sources.HTTP.select(`${RESTART}_STOP`).switchMap(
    success,
  );

  const startRequest$ = successStopRes$.withLatestFrom(
    accessToken$,
    (action, accessToken) => ({
      url: '/api/service/start',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: `${RESTART}_START`,
    }),
  );

  const successStartRes$ = sources.HTTP.select(`${RESTART}_START`).switchMap(
    success,
  );

  const action$ = Observable.from([
    stopRequest$.mapTo(uiActions.setLoading()),
    successStartRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
  ]).mergeAll();

  const request$ = Observable.merge(stopRequest$, startRequest$);

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function fetchIpListCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);
  const fetchAction$ = sources.ACTION.filter(
    action => action.type === FETCH_IP_LIST,
  );
  const successResToFetch$ = sources.HTTP.select()
    .concatMap(success)
    .filter(
      R.pipe(
        R.path(['request', 'category']),
        R.contains(R.__, [STOP, START, `${RESTART}_START`]),
      ),
    );

  const request$ = Observable.merge(
    fetchAction$,
    successResToFetch$,
  ).combineLatest(accessToken$, (action, accessToken) => ({
    url: '/api/ip',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    category: FETCH_IP_LIST,
  }));

  const successRes$ = sources.HTTP.select(FETCH_IP_LIST).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.pluck('body', 'data').map(setIpList),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
  startCycle,
  stopCycle,
  restartCycle,
  fetchIpListCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IP_LIST:
      return action.payload;
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
