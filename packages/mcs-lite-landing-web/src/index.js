/* global document */

import React from 'react';
import { hydrate, render } from 'react-dom';
import { Router, Route, useRouterHistory, IndexRedirect } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
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

/**
 * Remind: React-Snap
 * ref: https://github.com/stereobooster/react-snap
 */
const rootElement = document.getElementById('root');
const Root = (
  <ThemeProvider theme={landingTheme}>
    <BreakpointProvider breakpoints={BREAKPOINTS}>
      <Router history={history}>
        <Route path="/" component={IntlProvider}>
          <IndexRedirect to={browserLocale() || DEFAULT_LOCALE} />
          <Route path=":locale" component={App} />
        </Route>
      </Router>
    </BreakpointProvider>
  </ThemeProvider>
);

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(Root, rootElement);
} else {
  render(Root, rootElement);
}

registerServiceWorker();
autotrack(process.env.REACT_APP_GA_ID, BREAKPOINTS);
