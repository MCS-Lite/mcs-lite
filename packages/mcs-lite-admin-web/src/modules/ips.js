import { Observable } from 'rxjs/Observable';
import R from 'ramda';
import { actions as uiActions } from './ui';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const FETCH_IP_LIST = 'mcs-lite-admin-web/ips/FETCH_IP_LIST';
const SET_IP_LIST = 'mcs-lite-admin-web/ips/SET_IP_LIST';
const CLEAR = 'mcs-lite-admin-web/ips/CLEAR';

export const constants = {
  FETCH_IP_LIST,
  SET_IP_LIST,
  CLEAR,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const fetchIpList = () => ({ type: FETCH_IP_LIST });
const setIpList = payload => ({ type: SET_IP_LIST, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  fetchIpList,
  setIpList,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function fetchIpListCycle(sources) {
  const accessToken$ = sources.STATE
    .pluck('auth', 'access_token')
    .filter(R.complement(R.isNil)) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged(); // Remind: Avoid loop

  const request$ = sources.ACTION
    .filter(action => action.type === FETCH_IP_LIST)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/ip',
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: 'ips',
    }));

  const response$ = sources.HTTP.select('ips').switch();

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    response$.pluck('body', 'data').map(setIpList),
    response$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
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
