import R from 'ramda';
import { Observable } from 'rxjs/Observable';
import { LOCATION_CHANGE } from 'react-router-redux';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const SET_HAS_BACK = 'mcs-lite-mobile-web/ui/SET_HAS_BACK';
const CLEAR = 'mcs-lite-mobile-web/ui/CLEAR';

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const setHasBack = payload => ({ type: SET_HAS_BACK, payload });
const clear = () => ({ type: CLEAR });

export const actions = {
  setHasBack,
  clear,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const setHasBackEpic = action$ =>
  action$
    .ofType(LOCATION_CHANGE)
    .pluck('payload', 'pathname')
    .map(R.equals('/devices'))
    .switchMap(isDevicesListPage => Observable.merge(
      Observable.of(setHasBack(!isDevicesListPage)),
    ));


export const epics = [
  setHasBackEpic,
];

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  header: {
    hasBack: true,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_HAS_BACK:
      return R.assocPath(['header', 'hasBack'], action.payload)(state);

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
