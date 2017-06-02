import { push } from 'react-router-redux';
import R from 'ramda';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const PUSH_PATHNAME = 'mcs-lite-mobile-web/routing/PUSH_PATHNAME';
const PUSH_LOCALE = 'mcs-lite-mobile-web/routing/PUSH_LOCALE';
const LOCATION_CHANGE = require('react-router-redux/lib/reducer')
  .LOCATION_CHANGE;

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
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function pushPathnameCycle(sources) {
  // Remind: wait for locale avaliable
  const locale$ = sources.STATE
    .map(R.path(['routing', 'locationBeforeTransitions', 'query', 'locale']))
    .filter(d => !!d)
    .distinctUntilChanged();

  const pathname$ = sources.ACTION
    .filter(action => action.type === PUSH_PATHNAME)
    .pluck('payload');

  const action$ = pathname$
    .combineLatest(locale$, (pathname, locale) => ({
      pathname,
      query: { locale },
    }))
    .map(location => push(location));

  return {
    ACTION: action$,
  };
}

function pushLocaleCycle(sources) {
  const pathname$ = sources.STATE
    .map(R.path(['routing', 'locationBeforeTransitions', 'pathname']))
    .filter(d => !!d)
    .distinctUntilChanged();

  const locale$ = sources.ACTION
    .filter(action => action.type === PUSH_LOCALE)
    .pluck('payload');

  const action$ = locale$
    .combineLatest(pathname$, (locale, pathname) => ({
      pathname,
      query: { locale },
    }))
    .map(location => push(location));

  return {
    ACTION: action$,
  };
}

export const cycles = {
  pushPathnameCycle,
  pushLocaleCycle,
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
