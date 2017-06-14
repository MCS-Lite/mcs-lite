/* global document */

import 'normalize.css';
import React from 'react';
import { render } from 'react-snapshot';
import { Router, Route, useRouterHistory, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import browserLocale from 'browser-locale';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import { theme } from 'mcs-lite-theme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IntlProvider from './containers/IntlProvider';
import './style';
import './utils/i18n';

const history = useRouterHistory(createHistory)();
const DEFAULT_LOCALE = browserLocale() || 'en';

render(
  <ThemeProvider theme={theme}>
    <BreakpointProvider breakpoints={{ sm: 300, md: 568, lg: 1200 }}>
      <Router history={history}>
        <Route path="/" component={IntlProvider}>
          <IndexRedirect to={DEFAULT_LOCALE} />
          <Route path=":locale" component={App} />
        </Route>
      </Router>
    </BreakpointProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
