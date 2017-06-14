/* global document */
/* eslint import/first: 0 */

import './utils/rxjs';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  useRouterHistory,
  IndexRedirect,
  applyRouterMiddleware,
} from 'react-router';
import { createHistory } from 'history';
import useScroll from 'react-router-scroll/lib/useScroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import browserLocale from 'browser-locale';
import IntlProvider from './containers/IntlProvider';
import { theme } from 'mcs-lite-theme';
import App from './containers/App';
import DashboardLayout from './containers/DashboardLayout';
import Ip from './containers/Ip';
import System from './containers/System';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Language from './containers/Language';
import RequireAuth from './containers/RequireAuth';
import configureStore from './store/configureStore';
import { constants } from './modules/routing';
import './style';
import './utils/i18n';
import registerServiceWorker from './registerServiceWorker';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------
export const BASENAME = '/admin';
export const ROOT_ID = 'root';
const DEFAULT_LOCALE = browserLocale() || constants.DEFAULT_LOCALE;

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
      <ThemeProvider theme={theme}>
        <Router history={routerHistory} render={render}>
          <Route component={App}>
            <Route path="/login" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={RequireAuth}>
              <Route component={DashboardLayout}>
                <IndexRedirect to="ip" />
                <Route path="ip" component={Ip} />
                <Route path="system" component={System} />
                <Route path="language" component={Language} />
              </Route>
            </Route>
          </Route>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById(ROOT_ID),
);
registerServiceWorker();
