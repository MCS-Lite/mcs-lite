import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as uiActions } from './ui';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/FETCH_SYSTEM_BY_TYPE';
const SAVE_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/SAVE_SYSTEM_BY_TYPE';
const SET_SYSTEM_BY_TYPE = 'mcs-lite-admin-web/system/SET_SYSTEM_BY_TYPE';
const CLEAR = 'mcs-lite-admin-web/system/CLEAR';

export const constants = {
  FETCH_SYSTEM_BY_TYPE,
  SAVE_SYSTEM_BY_TYPE,
  SET_SYSTEM_BY_TYPE,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchSystemByType = payload => ({ type: FETCH_SYSTEM_BY_TYPE, payload });
const saveSystemByType = payload => ({ type: FETCH_SYSTEM_BY_TYPE, payload });
const setSystemByType = ({ data, type }) => ({
  type: SET_SYSTEM_BY_TYPE,
  payload: { data, type },
});
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchSystemByType,
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
      category: 'system',
    }));

  const response$ = sources.HTTP.select('system').switch();

  // Remind: api response with type(settingId) will be better.
  const responseType$ = response$
    .pluck('request', 'url')
    .map(R.pipe(R.match(/[\w]+$/), R.head));

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$
      .pluck('body', 'data')
      .map(data => JSON.stringify(data, null, 2))
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

export const cycles = {
  fetchSystemByTypeCycle,
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
