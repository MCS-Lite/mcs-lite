/* global document, window */

import React from 'react';
import { render } from 'react-snapshot';
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

/**
 * matchMedia polyfill
 * set default value to true
 * ref: https://github.com/WickyNilliams/enquire.js/issues/82#issuecomment-26990494
 * @author Michael Hsu
 */
window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    };
  };

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
