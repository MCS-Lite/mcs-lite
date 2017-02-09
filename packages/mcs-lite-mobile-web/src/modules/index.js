import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import devices, { epics as devicesEpics } from './devices';
import auth, { epics as authEpics } from './auth';

export const epic = combineEpics(
  ...devicesEpics,
  ...authEpics,
);

export const reducer = combineReducers({
  devices,
  auth,
  routing: routerReducer,
});
