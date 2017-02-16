/* global window */
/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { reducer, epic } from '../modules';

/**
 * Compose with Redux devtool
 * Ref: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/npm-package/developmentOnly.js
 */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const configureStore = (initialState, history) => {
  const middlewares = [
    createEpicMiddleware(epic),
    routerMiddleware(history),
  ];

  /**
   * Prevents state from being mutated
   * Ref: https://github.com/buunguyen/redux-freeze#usage
   */
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-freeze'));
  }

  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};

export default configureStore;
