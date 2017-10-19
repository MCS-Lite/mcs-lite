/* eslint no-underscore-dangle: ["error", { "allow": ["__"] }] */

import { Observable } from 'rxjs/Observable';
import * as R from 'ramda';
import uuid from 'uuid/v1';
import { constants as usersConstants } from './users';
import { constants as serviceConstants } from './service';
import { constants as dataConstants } from './data';
import { success } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_LOADING = 'mcs-lite-admin-web/ui/SET_LOADING';
const SET_LOADED = 'mcs-lite-admin-web/ui/SET_LOADED';
const SET_IS_RESTART_REQUIRED = 'mcs-lite-admin-web/ui/SET_IS_RESTART_REQUIRED';
const STORE_IS_RESTART_REQUIRED =
  'mcs-lite-admin-web/ui/STORE_IS_RESTART_REQUIRED';
const REMOVE_IS_RESTART_REQUIRED =
  'mcs-lite-admin-web/ui/REMOVE_IS_RESTART_REQUIRED';
const ADD_TOAST = 'mcs-lite-admin-web/ui/ADD_TOAST';
const REMOVE_TOAST = 'mcs-lite-admin-web/ui/REMOVE_TOAST';

export const constants = {
  SET_LOADING,
  SET_LOADED,
  SET_IS_RESTART_REQUIRED,
  STORE_IS_RESTART_REQUIRED,
  REMOVE_IS_RESTART_REQUIRED,
  ADD_TOAST,
  REMOVE_TOAST,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setLoading = () => ({ type: SET_LOADING });
const setLoaded = () => ({ type: SET_LOADED });
const setIsRestartRequired = payload => ({
  type: SET_IS_RESTART_REQUIRED,
  payload,
});
const storeIsRestartRequired = () => ({ type: STORE_IS_RESTART_REQUIRED });
const removeIsRestartRequired = () => ({ type: REMOVE_IS_RESTART_REQUIRED });
const addToast = ({ kind, children }) => ({
  type: ADD_TOAST,
  payload: { key: uuid(), kind, children },
});
const removeToast = key => ({ type: REMOVE_TOAST, payload: key });

export const actions = {
  setLoading,
  setLoaded,
  setIsRestartRequired,
  storeIsRestartRequired,
  removeIsRestartRequired,
  addToast,
  removeToast,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

const DELAY = 2500;

function addToastCycle(sources) {
  const key$ = sources.ACTION
    .filter(action => action.type === ADD_TOAST)
    .pluck('payload', 'key');

  const action$ = key$.concatMap(key =>
    Observable.of(removeToast(key)).let(sources.Time.delay(DELAY)),
  );

  return {
    ACTION: action$,
  };
}

function storeIsRestartRequiredCycle(sources) {
  const isStart$ = sources.STATE.pluck('service').map(R.complement(R.isEmpty));
  const isRestartRequired$ = sources.STORAGE.local
    .getItem(SET_IS_RESTART_REQUIRED)
    .map(R.equals('true'))
    .startWith(false)
    .distinctUntilChanged();

  // Remind: state sync with localstorage
  const action$ = isRestartRequired$.map(setIsRestartRequired);

  const successResToStore$ = sources.HTTP
    .select()
    .concatMap(success)
    .filter(
      R.pipe(
        R.path(['request', 'category']),
        R.contains(R.__, [
          usersConstants.DELETE_USERS,
          usersConstants.CREATE_USER,
          usersConstants.CREATE_USER_BY_CSV,
          usersConstants.CHANGE_PASSWORD_BY_ID,
          usersConstants.PUT_IS_ACTIVE_BY_ID,
          dataConstants.DELETE_DATA,
        ]),
      ),
    );

  const storageRequest$ = successResToStore$
    .withLatestFrom(
      isRestartRequired$,
      isStart$,
      (res, isRestartRequired, isStart) => ({ isStart, isRestartRequired }),
    )
    .filter(({ isStart, isRestartRequired }) => isStart && !isRestartRequired)
    .mapTo({
      target: 'local',
      action: 'setItem',
      key: SET_IS_RESTART_REQUIRED,
      value: 'true',
    });

  return {
    ACTION: action$,
    STORAGE: storageRequest$,
  };
}

function removeIsRestartRequiredCycle(sources) {
  const successResToRemove$ = sources.HTTP
    .select()
    .concatMap(success)
    .filter(
      R.pipe(
        R.path(['request', 'category']),
        R.contains(R.__, [
          `${serviceConstants.RESTART}_START`,
          serviceConstants.STOP,
        ]),
      ),
    );

  const storageRequest$ = successResToRemove$.mapTo({
    target: 'local',
    action: 'removeItem',
    key: SET_IS_RESTART_REQUIRED,
  });

  return {
    STORAGE: storageRequest$,
  };
}

export const cycles = {
  addToastCycle,
  storeIsRestartRequiredCycle,
  removeIsRestartRequiredCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isRestartRequired: false,
  toasts: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoading: false,
      };

    case SET_IS_RESTART_REQUIRED:
      return {
        ...state,
        isRestartRequired: action.payload,
      };

    case ADD_TOAST:
      return {
        ...state,
        toasts: [action.payload, ...state.toasts],
      };

    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(t => t.key !== action.payload),
      };

    default:
      return state;
  }
}
