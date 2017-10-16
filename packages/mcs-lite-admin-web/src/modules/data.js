import { Observable } from 'rxjs/Observable';
import { actions as uiActions } from './ui';
import { success, accessTokenSelector$ } from '../utils/cycleHelper';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const DELETE_DATA = 'mcs-lite-admin-web/data/DELETE_DATA';

export const constants = {
  DELETE_DATA,
};

// ----------------------------------------------------------------------------
// 2. Action Creators (Sync)
// ----------------------------------------------------------------------------

const deleteData = successMessage => ({
  type: DELETE_DATA,
  payload: successMessage,
});

export const actions = {
  deleteData,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function deleteDataCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const message$ = sources.ACTION
    .filter(action => action.type === DELETE_DATA)
    .pluck('payload');

  const request$ = sources.ACTION
    .filter(action => action.type === DELETE_DATA)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/clear',
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: DELETE_DATA,
    }));

  const successRes$ = sources.HTTP.select(DELETE_DATA).switchMap(success);

  const action$ = Observable.from([
    request$.mapTo(uiActions.setLoading()),
    successRes$
      .withLatestFrom(message$, (response, message) => message)
      .map(message =>
        uiActions.addToast({ kind: 'success', children: message }),
      ),
    successRes$.mapTo(uiActions.setLoaded()),
  ]).mergeAll();

  return {
    ACTION: action$,
    HTTP: request$,
  };
}

export const cycles = {
  deleteDataCycle,
};

// ----------------------------------------------------------------------------
// 4. Reducer as default (State shaper)
// ----------------------------------------------------------------------------
