import { combineCycles } from 'redux-cycles';
import { combineReducers } from 'redux';
import R from 'ramda';
import routing, { cycles as routingCycles } from './routing';
import auth, { cycles as authCycles } from './auth';
import ui, { cycles as uiCycles } from './ui';
import ips, { cycles as ipsCycles } from './ips';
import system, { cycles as systemCycles } from './system';

export const cycle = combineCycles(
  ...R.values(routingCycles),
  ...R.values(authCycles),
  ...R.values(uiCycles),
  ...R.values(ipsCycles),
  ...R.values(systemCycles),
);

export const reducer = combineReducers({
  auth,
  ui,
  routing,
  ips,
  system,
});
