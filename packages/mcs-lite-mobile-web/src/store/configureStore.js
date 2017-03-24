/* global window */
/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { run } from '@cycle/rxjs-run';
import { createCycleMiddleware } from 'redux-cycles';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';
import { routerMiddleware } from 'react-router-redux';
import { reducer, cycle as main } from '../modules';

/**
 * Compose with Redux devtool
 * Ref: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/npm-package/developmentOnly.js
 */
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const configureStore = (initialState, history) => {
  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver, makeStateDriver } = cycleMiddleware;

  const middlewares = [cycleMiddleware, routerMiddleware(history)];

  /**
   * Prevents state from being mutated
   * Ref: https://github.com/buunguyen/redux-freeze#usage
   */
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-freeze'));
  }

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  /**
   * redux-cycles
   * Remind: MUST create sotre first.
   */
  run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    Time: timeDriver,
    HTTP: makeHTTPDriver(),
  });

  return store;
};

export default configureStore;
