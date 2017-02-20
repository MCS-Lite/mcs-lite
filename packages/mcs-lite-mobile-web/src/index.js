/* global document */
/* eslint import/first: 0 */

import './utils/rxjs';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, useRouterHistory, IndexRedirect, applyRouterMiddleware } from 'react-router';
import { createHistory } from 'history';
import useScroll from 'react-router-scroll/lib/useScroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import IntlProvider from './containers/IntlProvider';
import theme from './utils/theme';
import Layout from './components/Layout';
import DeviceList from './containers/DeviceList';
import DeviceDetail from './containers/DeviceDetail';
import DeviceDetailInfo from './containers/DeviceDetailInfo';
import DeviceTrigger from './containers/DeviceTrigger';
import DeviceTriggerEdit from './containers/DeviceTriggerEdit';
import Signin from './containers/Signin';
import Account from './containers/Account';
import Password from './containers/Password';
import RequireAuth from './containers/RequireAuth';
import configureStore from './store/configureStore';
import './style';
import './utils/i18n';

const history = useRouterHistory(createHistory)({ basename: '/mobile' });
const store = configureStore({}, history);
const routerHistory = syncHistoryWithStore(history, store);
const render = applyRouterMiddleware(useScroll());

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider defaultLocale="zh-TW">
      <ThemeProvider theme={theme}>
        <Router
          history={routerHistory}
          render={render}
        >
          <Route path="/signin" component={Signin} />
          <Route path="/" component={RequireAuth}>
            <IndexRedirect to="devices" />
            <Route component={Layout.LayoutDefault}>
              <Route path="password" component={Password} />
              <Route path="devices" component={DeviceList} />
              <Route path="devices/:deviceId" component={DeviceDetail} />
              <Route path="devices/:deviceId/info" component={DeviceDetailInfo} />
              <Route path="devices/:deviceId/trigger" component={DeviceTrigger} />
              <Route path="devices/:deviceId/trigger/edit" component={DeviceTriggerEdit} />
            </Route>
            <Route component={Layout.LayoutDialog}>
              <Route path="account" component={Account} />
            </Route>
          </Route>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
