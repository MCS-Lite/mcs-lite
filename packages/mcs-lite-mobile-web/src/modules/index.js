import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import devices, { epics as devicesEpics } from './devices';
import auth, { epics as authEpics } from './auth';
import ui, { epics as uiEpics } from './ui';

export const epic = combineEpics(
  ...devicesEpics,
  ...authEpics,
  ...uiEpics,
);

export const reducer = combineReducers({
  devices,
  auth,
  ui,
  routing: routerReducer,
});
