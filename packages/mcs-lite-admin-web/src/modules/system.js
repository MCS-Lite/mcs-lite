import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import isJSON from 'validator/lib/isJSON';
import { actions as uiActions } from './ui';
import { actions as authActions } from './auth';

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
const uploadSystemByType = payload => ({
  type: UPLOAD_SYSTEM_BY_TYPE,
  payload,
});
const postReset = payload => ({
  type: POST_RESET,
  payload,
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
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged(); // Remind: Avoid loop

  const request$ = sources.ACTION
    .filter(action => action.type === FETCH_SYSTEM_BY_TYPE)
    .distinctUntilKeyChanged('payload')
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: `/api/service/${action.payload}`,
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: FETCH_SYSTEM_BY_TYPE,
    }));

  const response$ = sources.HTTP.select(FETCH_SYSTEM_BY_TYPE).switch();

  // Remind: api response with type(settingId) will be better.
  const responseType$ = response$
    .pluck('request', 'url')
    .map(R.pipe(R.match(/[\w]+$/), R.head));

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$
      .pluck('body', 'data')
      .map(data => JSON.stringify(data, null, '\t'))
      .zip(responseType$, (data, type) => ({
        data,
        type,
      }))
      .map(setSystemByType),
    response$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function uploadSystemByTypeCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged();

  const system$ = sources.STATE.pluck('system');

  const type$ = sources.ACTION
    .filter(action => action.type === UPLOAD_SYSTEM_BY_TYPE)
    .pluck('payload');

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

  const response$ = sources.HTTP.select(UPLOAD_SYSTEM_BY_TYPE).switch();
  const action$ = response$
    .pluck('text')
    .map(text => uiActions.addToast({ kind: 'success', children: text }));

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

function postResetCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged();

  const message$ = sources.ACTION
    .filter(action => action.type === POST_RESET)
    .pluck('payload');

  const request$ = sources.ACTION
    .filter(action => action.type === POST_RESET)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/service/reset',
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: POST_RESET,
    }));

  const response$ = sources.HTTP.select(POST_RESET).switch();
  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$
      .pluck('text')
      .combineLatest(message$, (text, message) => message)
      .switchMap(message =>
        Observable.of(
          authActions.signout('', true),
          uiActions.addToast({ kind: 'success', children: message }),
        ),
      ),
    response$.mapTo(uiActions.setLoaded()),
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
  db: '',
  oauth: '',
  rest: '',
  wot: '',
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
