/* global document */
/* eslint import/first: 0 */

import './utils/rxjs';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Layout from './components/Layout';
import DeviceList from './containers/DeviceList';
import DeviceDetail from './containers/DeviceDetail';
import Signin from './containers/Signin';
import Account from './containers/Account';
import configureStore from './store/configureStore';
import './style';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history} render={applyRouterMiddleware(useScroll())}>

        <Route path="/">
          <IndexRedirect to="/signin" />
          <Route path="/signin" component={Signin} />
          <Route component={Layout.LayoutWithHeader}>
            <Route path="/devices" component={DeviceList} />
            <Route path="/devices/:deviceId" component={DeviceDetail} />
          </Route>
          <Route component={Layout.LayoutDialog}>
            <Route path="/account" component={Account} />
          </Route>
        </Route>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
