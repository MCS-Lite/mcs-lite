import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import epic from './epic';

const epicMiddleware = createEpicMiddleware(epic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routerMiddleware(browserHistory),
    ),
  ),
);

export default configureStore
