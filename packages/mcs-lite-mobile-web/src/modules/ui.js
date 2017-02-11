// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_LOADING = 'mcs-lite-mobile-web/ui/SET_LOADING';
const SET_LOADED = 'mcs-lite-mobile-web/ui/SET_LOADED';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setLoading = () => ({ type: SET_LOADING });
const setLoaded = () => ({ type: SET_LOADED });

export const actions = {
  setLoading,
  setLoaded,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

export const epics = [];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  isLoading: false,
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

    default:
      return state;
  }
}
