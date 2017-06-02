import { combineCycles } from 'redux-cycles';
import { combineReducers } from 'redux';
import R from 'ramda';
import routing, { cycles as routingCycles } from './routing';
import devices, { cycles as devicesCycles } from './devices';
import auth, { cycles as authCycles } from './auth';
import ui, { cycles as uiCycles } from './ui';
import datapoints, { cycles as datapointsCycles } from './datapoints';
import ips, { cycles as ipsCycles } from './ips';
import system, { cycles as systemCycles } from './system';

export const cycle = combineCycles(
  ...R.values(routingCycles),
  ...R.values(authCycles),
  ...R.values(devicesCycles),
  ...R.values(uiCycles),
  ...R.values(datapointsCycles),
  ...R.values(ipsCycles),
  ...R.values(systemCycles),
);

export const reducer = combineReducers({
  devices,
  auth,
  ui,
  routing,
  datapoints,
  ips,
  system,
});
