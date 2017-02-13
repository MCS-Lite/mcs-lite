import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import assocPath from 'ramda/src/assocPath';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const PUSH_PATHNAME = 'mcs-lite-mobile-web/routing/PUSH_PATHNAME';
const PUSH_LOCALE = 'mcs-lite-mobile-web/routing/PUSH_LOCALE';
const LOCATION_CHANGE = require('react-router-redux/lib/reducer').LOCATION_CHANGE;

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
    .switchMap(({ payload }) => Observable.of(push(
      assocPath(['pathname'], payload)(store.getState().routing.locationBeforeTransitions),
    )));

const pushLocaleEpic = (action$, store) =>
  action$
    .ofType(PUSH_LOCALE)
    .switchMap(({ payload }) => Observable.of(push(
      assocPath(['query', 'locale'], payload)(store.getState().routing.locationBeforeTransitions),
    )));


export const epics = [
  pushPathnameEpic,
  pushLocaleEpic,
];

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
