import { push } from 'react-router-redux';
import R from 'ramda';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const PUSH_PATHNAME = 'mcs-lite-mobile-web/routing/PUSH_PATHNAME';
const PUSH_LOCALE = 'mcs-lite-mobile-web/routing/PUSH_LOCALE';
const LOCATION_CHANGE = require('react-router-redux/lib/reducer').LOCATION_CHANGE;

export const constants = {
  PUSH_PATHNAME,
  PUSH_LOCALE,
  LOCATION_CHANGE,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const pushPathname = pathname => ({ type: PUSH_PATHNAME, payload: pathname });
const pushLocale = locale => ({ type: PUSH_LOCALE, payload: locale });

export const actions = {
  pushPathname,
  pushLocale,
};

// ----------------------------------------------------------------------------
// 3. Epic (Async, side effect)
// ----------------------------------------------------------------------------

const pushPathnameEpic = (action$, store) =>
  action$
    .ofType(PUSH_PATHNAME)
    .map(({ payload }) => R.pipe(
      R.path(['routing', 'locationBeforeTransitions']),
      R.assocPath(['pathname'], payload),
      push,
    )(store.getState()));

const pushLocaleEpic = (action$, store) =>
  action$
    .ofType(PUSH_LOCALE)
    .map(({ payload }) => R.pipe(
      R.path(['routing', 'locationBeforeTransitions']),
      R.assocPath(['query', 'locale'], payload),
      push,
    )(store.getState()));

export const epics = {
  pushPathnameEpic,
  pushLocaleEpic,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (state shaper)
// ----------------------------------------------------------------------------

const initialState = {
  locationBeforeTransitions: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload,
      };

    default:
      return state;
  }
}
