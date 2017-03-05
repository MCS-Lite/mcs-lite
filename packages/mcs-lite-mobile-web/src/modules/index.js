import { combineCycles } from 'redux-cycles';
import { combineReducers } from 'redux';
import R from 'ramda';
import routing, { cycles as routingCycles } from './routing';
import devices, { cycles as devicesCycles } from './devices';
import auth, { cycles as authCycles } from './auth';
import ui, { cycles as uiCycles } from './ui';

export const cycle = combineCycles(
  ...R.values(routingCycles),
  ...R.values(authCycles),
  ...R.values(devicesCycles),
  ...R.values(uiCycles),
);

export const reducer = combineReducers({
  devices,
  auth,
  ui,
  routing,
});
