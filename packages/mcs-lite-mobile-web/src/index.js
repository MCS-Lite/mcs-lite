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
import mobileTheme from './utils/mobileTheme';
import Layout from './components/Layout';
import App from './containers/App';
import DeviceList from './containers/DeviceList';
import DeviceDetail from './containers/DeviceDetail';
import DeviceDetailInfo from './containers/DeviceDetailInfo';
import DeviceTrigger from './containers/DeviceTrigger';
import DeviceTriggerEdit from './containers/DeviceTriggerEdit';
import DeviceDataChannelDetail from './containers/DeviceDataChannelDetail';
import DeviceDataChannelTimeRange from './containers/DeviceDataChannelTimeRange';
import Signin from './containers/Signin';
import Account from './containers/Account';
import Password from './containers/Password';
import RequireAuth from './containers/RequireAuth';
import configureStore from './store/configureStore';
import './style';
import './utils/i18n';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------
export const BASENAME = '/mobile';
export const DEFAULT_LOCALE = 'zh-TW';
export const ROOT_ID = 'root';

// ----------------------------------------------------------------------------
// 2. Redux store
// ----------------------------------------------------------------------------
const history = useRouterHistory(createHistory)({ basename: BASENAME });
const store = configureStore({}, history);
const routerHistory = syncHistoryWithStore(history, store);
const render = applyRouterMiddleware(useScroll());

// ----------------------------------------------------------------------------
// 3. React render
// ----------------------------------------------------------------------------
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider defaultLocale={DEFAULT_LOCALE}>
      <ThemeProvider theme={mobileTheme}>
        <Router history={routerHistory} render={render}>
          <Route component={App}>
            <Route path="/login" component={Signin} />
            <Route path="/" component={RequireAuth}>
              <IndexRedirect to="devices" />
              <Route component={Layout.LayoutDefault}>
                <Route path="password" component={Password} />
                <Route path="devices" component={DeviceList} />
                <Route path="devices/:deviceId" component={DeviceDetail} />
                <Route path="devices/:deviceId/info" component={DeviceDetailInfo} />
                <Route path="devices/:deviceId/trigger" component={DeviceTrigger} />
                <Route path="devices/:deviceId/trigger/edit" component={DeviceTriggerEdit} />
                <Route path="devices/:deviceId/dataChannels/:dataChannelId" component={DeviceDataChannelDetail} />
                <Route path="devices/:deviceId/dataChannels/:dataChannelId/timeRange" component={DeviceDataChannelTimeRange} />
              </Route>
              <Route component={Layout.LayoutDialog}>
                <Route path="account" component={Account} />
              </Route>
            </Route>
          </Route>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById(ROOT_ID),
);
