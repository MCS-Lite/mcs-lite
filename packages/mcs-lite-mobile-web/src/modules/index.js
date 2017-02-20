import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import R from 'ramda';
import routing, { epics as routingEpics } from './routing';
import devices, { epics as devicesEpics } from './devices';
import auth, { epics as authEpics } from './auth';
import ui, { epics as uiEpics } from './ui';

export const epic = combineEpics(
  ...R.values(routingEpics),
  ...R.values(devicesEpics),
  ...R.values(authEpics),
  ...R.values(uiEpics),
);

export const reducer = combineReducers({
  devices,
  auth,
  ui,
  routing,
});
