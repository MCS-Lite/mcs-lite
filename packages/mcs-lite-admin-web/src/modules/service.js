import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as uiActions } from './ui';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const START = 'mcs-lite-admin-web/service/START';
const STOP = 'mcs-lite-admin-web/service/STOP';
const SET_IS_STARTED = 'mcs-lite-admin-web/service/SET_IS_STARTED';
const CLEAR = 'mcs-lite-admin-web/service/CLEAR';

export const constants = {
  START,
  STOP,
  SET_IS_STARTED,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const start = () => ({ type: START });
const stop = () => ({ type: STOP });
const setIsStarted = payload => ({ type: SET_IS_STARTED, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  start,
  stop,
  setIsStarted,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function startCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged(); // Remind: Avoid loop

  const request$ = sources.ACTION
    .filter(action => action.type === START)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/service/start',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: START,
    }));

  const response$ = sources.HTTP.select(START).switch();

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$.pluck('text').mapTo(setIsStarted(true)),
    response$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function stopCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged(); // Remind: Avoid loop

  const request$ = sources.ACTION
    .filter(action => action.type === STOP)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/service/stop',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: STOP,
    }));

  const response$ = sources.HTTP.select(STOP).switch();

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$.pluck('text').mapTo(setIsStarted(false)),
    response$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
  startCycle,
  stopCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {
  isStarted: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IS_STARTED:
      return {
        isStarted: action.payload,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
