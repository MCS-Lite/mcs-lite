/* global document */
/* eslint import/first: 0 */

import './utils/rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import App from './containers/App';
import Device from './containers/Device';
import Signin from './containers/Signin';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/signin" component={Signin} />
        <Route path="/" component={App}>
          <IndexRedirect to="/signin" />
          <Route path="/devices" component={Device} />
        </Route>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
