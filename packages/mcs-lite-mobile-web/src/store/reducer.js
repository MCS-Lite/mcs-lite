import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  devices: require('../modules/devices').default,
  routing: routerReducer,
});

export default reducer;
