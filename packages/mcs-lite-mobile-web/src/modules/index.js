import { combineCycles } from 'redux-cycles';
import { combineReducers } from 'redux';
import * as R from 'ramda';
import routing, { cycles as routingCycles } from './routing';
import devices, { cycles as devicesCycles } from './devices';
import auth, { cycles as authCycles } from './auth';
import ui, { cycles as uiCycles } from './ui';
import datapoints, { cycles as datapointsCycles } from './datapoints';

export const cycle = combineCycles(
  ...R.values(routingCycles),
  ...R.values(authCycles),
  ...R.values(devicesCycles),
  ...R.values(uiCycles),
  ...R.values(datapointsCycles),
);

export const reducer = combineReducers({
  devices,
  auth,
  ui,
  routing,
  datapoints,
});
