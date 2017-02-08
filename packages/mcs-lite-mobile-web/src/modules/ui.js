import R from 'ramda';
import { Observable } from 'rxjs/Observable';
import { LOCATION_CHANGE } from 'react-router-redux';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_IS_FILTERABLE = 'mcs-lite-mobile-web/ui/SET_IS_FILTERABLE';
const SET_IS_FILTER_OPEN = 'mcs-lite-mobile-web/ui/SET_IS_FILTER_OPEN';
const SET_FILTER_VALUE = 'mcs-lite-mobile-web/ui/SET_FILTER_VALUE';
const CLEAR = 'mcs-lite-mobile-web/ui/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setIsFilterable = payload => ({ type: SET_IS_FILTERABLE, payload });
const setIsFilterOpen = payload => ({ type: SET_IS_FILTER_OPEN, payload });
const setFilterValue = payload => ({ type: SET_FILTER_VALUE, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  setIsFilterable,
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

const setIsFilterableEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .pluck('payload', 'pathname')
    .filter(R.equals('/devices'))
    .switchMap(() => Observable.merge(
      Observable.of(setIsFilterable(true)),
    ));


export const epics = [
  setIsFilterOpenEpic,
  setIsFilterableEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  header: {
    isFilterable: false,
    isFilterOpen: false,
    filterValue: '',
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IS_FILTERABLE:
      return R.assocPath(['header', 'isFilterable'], action.payload)(state);

    case SET_IS_FILTER_OPEN:
      return R.assocPath(['header', 'isFilterOpen'], action.payload)(state);

    case SET_FILTER_VALUE:
      return R.assocPath(['header', 'filterValue'], action.payload)(state);

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
