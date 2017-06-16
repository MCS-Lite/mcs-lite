/* global document */

import 'normalize.css';
import React from 'react';
import { render } from 'react-snapshot';
import { Router, Route, useRouterHistory, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import browserLocale from 'browser-locale';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import IntlProvider from './containers/IntlProvider';
import { DEFAULT_LOCALE } from './containers/IntlProvider/IntlProvider';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import landingTheme from './utils/landingTheme';
import './style';
import './utils/i18n';

// ----------------------------------------------------------------------------
// 1. Constants
// ----------------------------------------------------------------------------

const BREAKPOINTS = { sm: 300, md: 568, lg: 1200 };

// ----------------------------------------------------------------------------
// 2. React render
// ----------------------------------------------------------------------------

const history = useRouterHistory(createHistory)();

render(
  <ThemeProvider theme={landingTheme}>
    <BreakpointProvider breakpoints={BREAKPOINTS}>
      <Router history={history}>
        <Route path="/" component={IntlProvider}>
          <IndexRedirect to={browserLocale() || DEFAULT_LOCALE} />
          <Route path=":locale" component={App} />
        </Route>
      </Router>
    </BreakpointProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
