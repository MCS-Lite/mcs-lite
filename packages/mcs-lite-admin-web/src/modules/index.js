import { combineCycles } from 'redux-cycles';
import { combineReducers } from 'redux';
import R from 'ramda';
import routing, { cycles as routingCycles } from './routing';
import auth, { cycles as authCycles } from './auth';
import ui, { cycles as uiCycles } from './ui';
import system, { cycles as systemCycles } from './system';
import service, { cycles as serviceCycles } from './service';

export const cycle = combineCycles(
  ...R.values(routingCycles),
  ...R.values(authCycles),
  ...R.values(uiCycles),
  ...R.values(systemCycles),
  ...R.values(serviceCycles),
);

export const reducer = combineReducers({
  auth,
  ui,
  routing,
  system,
  service,
});
