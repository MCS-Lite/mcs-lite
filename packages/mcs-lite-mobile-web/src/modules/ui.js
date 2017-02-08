import { Observable } from 'rxjs/Observable';
import { LOCATION_CHANGE } from 'react-router-redux';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_IS_FILTER_OPEN = 'mcs-lite-mobile-web/ui/SET_IS_FILTER_OPEN';
const SET_FILTER_VALUE = 'mcs-lite-mobile-web/ui/SET_FILTER_VALUE';
const CLEAR = 'mcs-lite-mobile-web/ui/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setIsFilterOpen = () => ({ type: SET_IS_FILTER_OPEN });
const setFilterValue = payload => ({ type: SET_FILTER_VALUE, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  setIsFilterOpen,
  setFilterValue,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const setIsFilterOpenEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .switchMap(() => Observable.merge(
      Observable.of(clear()),
    ));

export const epics = [
  setIsFilterOpenEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  isFilterOpen: false,
  filterValue: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IS_FILTER_OPEN:
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
