import { push } from 'react-router-redux';
import R from 'ramda';
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer';

const DEFAULT_LOCALE = 'zh-TW';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

export const constants = {
  LOCATION_CHANGE,
  DEFAULT_LOCALE,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

export const actions = {};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

/**
 * This cycle handle two use cases:
 * 1. There is no locale been set.
 *    Set to default locale.
 *
 * 2. When routing change with react-router-redux push('/') action without locale info
 *    Set to last locale state.
 *
 *  **Please see the routing.test.js for more details.**
 * @author Michael Hsu
 */
function localeCycle(sources) {
  const pathnameWithoutLocale$ = sources.STATE
    .map(R.path(['routing', 'locationBeforeTransitions']))
    .filter(d => d && d.pathname && !d.query.locale) // Case1
    .pluck('pathname')
    .distinctUntilChanged();

  const locale$ = sources.STATE
    .map(R.path(['routing', 'locationBeforeTransitions', 'query', 'locale']))
    .filter(d => !!d)
    .startWith(DEFAULT_LOCALE) // Case2
    .distinctUntilChanged();

  const action$ = locale$
    .combineLatest(pathnameWithoutLocale$, (locale, pathname) => ({
      pathname,
      query: { locale },
    }))
    .map(location => push(location));

  return {
    ACTION: action$,
  };
}

export const cycles = {
  localeCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
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
