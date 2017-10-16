import { push } from 'react-router-redux';
import * as R from 'ramda';
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer';
import getBrowserLocale from 'browser-locale';
import { localeMapper } from 'mcs-lite-ui/lib/utils/localeHelper';

const DEFAULT_LOCALE = 'zh-TW';
const browserLocale = getBrowserLocale();

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

  const query$ = sources.STATE
    .map(R.path(['routing', 'locationBeforeTransitions', 'query']))
    .filter(d => !!d)
    .filter(R.complement(R.isEmpty))
    .startWith({})
    .distinctUntilChanged(R.equals);

  const action$ = pathnameWithoutLocale$
    .combineLatest(query$, (pathname, query) => ({
      pathname,
      query: {
        locale: localeMapper(DEFAULT_LOCALE)(browserLocale),
        ...query,
      }, // Case2
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
