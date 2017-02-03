import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import devices, { epics as devicesEpics } from './devices';

export const epic = combineEpics(
  ...devicesEpics,
);

export const reducer = combineReducers({
  devices,
  routing: routerReducer,
});
