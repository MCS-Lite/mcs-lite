import { Observable } from 'rxjs/Observable';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

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
const setIsStarted = isStarted => ({
  type: SET_IS_STARTED,
  payload: isStarted,
});
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
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const request$ = sources.ACTION
    .filter(action => action.type === START)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/service/start',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: START,
    }));

  const successRes$ = sources.HTTP.select(START).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.pluck('text').mapTo(setIsStarted(true)),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function stopCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const request$ = sources.ACTION
    .filter(action => action.type === STOP)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/service/stop',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: STOP,
    }));

  const successRes$ = sources.HTTP.select(STOP).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$.mapTo(setIsStarted(false)),
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
