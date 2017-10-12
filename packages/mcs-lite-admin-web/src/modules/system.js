import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import isJSON from 'validator/lib/isJSON';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/FETCH_SYSTEM_BY_TYPE';
const UPLOAD_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/UPLOAD_SYSTEM_BY_TYPE';
const POST_RESET = 'mcs-lite-admin-web/system/POST_RESET';
const SET_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/SET_SYSTEM_BY_TYPE';
const CLEAR = 'mcs-lite-admin-web/system/CLEAR';

export const constants = {
  FETCH_SYSTEM_BY_TYPE,
  UPLOAD_SYSTEM_BY_TYPE,
  POST_RESET,
  SET_SYSTEM_BY_TYPE,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchSystemByType = payload => ({ type: FETCH_SYSTEM_BY_TYPE, payload });
const uploadSystemByType = (type, message) => ({
  type: UPLOAD_SYSTEM_BY_TYPE,
  payload: { type, message },
});
const postReset = successMessage => ({
  type: POST_RESET,
  payload: successMessage,
});
const setSystemByType = ({ data, type }) => ({
  type: SET_SYSTEM_BY_TYPE,
  payload: { data, type },
});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchSystemByType,
  uploadSystemByType,
  postReset,
  setSystemByType,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function fetchSystemByTypeCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);
  const type$ = sources.ACTION
    .filter(action => action.type === FETCH_SYSTEM_BY_TYPE)
    .pluck('payload')
    .distinctUntilChanged();

  const request$ = type$.combineLatest(accessToken$, (type, accessToken) => ({
    url: `/api/service/${type}`,
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    category: FETCH_SYSTEM_BY_TYPE,
  }));

  const successRes$ = sources.HTTP
    .select(FETCH_SYSTEM_BY_TYPE)
    .switchMap(success);

  // Remind: api response with type(settingId) will be better.
  const responseType$ = successRes$
    .pluck('request', 'url')
    .map(R.pipe(R.match(/[\w]+$/), R.head));

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .pluck('body', 'data')
      .map(data => JSON.stringify(data, null, '\t'))
      .zip(responseType$, (data, type) => ({
        data,
        type,
      }))
      .map(setSystemByType),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function uploadSystemByTypeCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);
  const system$ = sources.STATE.pluck('system');

  const payload$ = sources.ACTION
    .filter(action => action.type === UPLOAD_SYSTEM_BY_TYPE)
    .pluck('payload');
  const type$ = payload$.pluck('type');
  const message$ = payload$.pluck('message');

  const content$ = type$
    .withLatestFrom(system$, (type, system) => system[type])
    .distinctUntilChanged()
    .filter(isJSON)
    .map(JSON.parse);

  const request$ = type$.withLatestFrom(
    accessToken$,
    content$,
    (type, accessToken, content) => ({
      url: `/api/service/${type}`,
      method: 'PUT',
      send: { content },
      headers: { Authorization: `Bearer ${accessToken}` },
      category: UPLOAD_SYSTEM_BY_TYPE,
    }),
  );

  const successRes$ = sources.HTTP
    .select(UPLOAD_SYSTEM_BY_TYPE)
    .switchMap(success);

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

function postResetCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const message$ = sources.ACTION
    .filter(action => action.type === POST_RESET)
    .pluck('payload');

  const request$ = sources.ACTION
    .filter(action => action.type === POST_RESET)
    .withLatestFrom(accessToken$, (action, accessToken) => ({
      url: '/api/service/reset',
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: POST_RESET,
    }));

  const successRes$ = sources.HTTP.select(POST_RESET).switchMap(success);

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

export const cycles = {
  fetchSystemByTypeCycle,
  uploadSystemByTypeCycle,
  postResetCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {
  db: '{}',
  oauth: '{}',
  rest: '{}',
  wot: '{}',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SYSTEM_BY_TYPE: {
      const { data, type } = action.payload;

      return {
        ...state,
        [type]: data,
      };
    }
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
