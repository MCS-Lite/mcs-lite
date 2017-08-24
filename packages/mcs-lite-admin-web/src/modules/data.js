import { actions as authActions } from './auth';
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

const deleteData = () => ({ type: DELETE_DATA });

export const actions = {
  deleteData,
};

// ----------------------------------------------------------------------------
// 3. Cycle (Side-effects)
// ----------------------------------------------------------------------------

function deleteDataCycle(sources) {
  const accessToken$ = accessTokenSelector$(sources.STATE);

  const request$ = sources.ACTION
    .filter(action => action.type === DELETE_DATA)
    .combineLatest(accessToken$, (action, accessToken) => ({
      url: '/api/clear',
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
      category: DELETE_DATA,
    }));

  const successRes$ = sources.HTTP.select(DELETE_DATA).switchMap(success);

  const action$ = successRes$.mapTo(authActions.signout('', true));

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
