/* global document */

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
import registerServiceWorker from './utils/registerServiceWorker';
import landingTheme, { BREAKPOINTS } from './utils/landingTheme';
import autotrack from './utils/autotrack';
import './utils/style';
import './utils/i18n';

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
autotrack(process.env.REACT_APP_GA_ID, BREAKPOINTS);
