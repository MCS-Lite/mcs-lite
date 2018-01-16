import { Observable } from "rxjs/Observable";
import uuid from "uuid/v1";

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_LOADING = "mcs-lite-mobile-web/ui/SET_LOADING";
const SET_LOADED = "mcs-lite-mobile-web/ui/SET_LOADED";
const ADD_TOAST = "mcs-lite-mobile-web/ui/ADD_TOAST";
const REMOVE_TOAST = "mcs-lite-mobile-web/ui/REMOVE_TOAST";

export const constants = {
  SET_LOADING,
  SET_LOADED,
  ADD_TOAST,
  REMOVE_TOAST
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setLoading = () => ({ type: SET_LOADING });
const setLoaded = () => ({ type: SET_LOADED });
const addToast = ({ kind, children }) => ({
  type: ADD_TOAST,
  payload: { key: uuid(), kind, children }
});
const removeToast = key => ({ type: REMOVE_TOAST, payload: key });

export const actions = {
  setLoading,
  setLoaded,
  addToast,
  removeToast
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

const DELAY = 2500;

function addToastCycle(sources) {
  const key$ = sources.ACTION.filter(action => action.type === ADD_TOAST).pluck(
    "payload",
    "key"
  );

  const action$ = key$.concatMap(key =>
    Observable.of(removeToast(key)).let(sources.Time.delay(DELAY))
  );

  return {
    ACTION: action$
  };
}

export const cycles = {
  addToastCycle
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------

const initialState = {
  isLoading: false,
  toasts: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case SET_LOADED:
      return {
        ...state,
        isLoading: false
      };

    case ADD_TOAST:
      return {
        ...state,
        toasts: [action.payload, ...state.toasts]
      };

    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(t => t.key !== action.payload)
      };

    default:
      return state;
  }
}
