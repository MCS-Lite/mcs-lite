import { combineEpics } from 'redux-observable';

export default combineEpics(
  ...require('../modules/devices').epics,
);
