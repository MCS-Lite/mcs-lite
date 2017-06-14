/* global document */

import 'normalize.css';
import React from 'react';
import { render } from 'react-snapshot';
import { Router, Route, useRouterHistory, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IntlProvider from './containers/IntlProvider';
import './utils/i18n';

const history = useRouterHistory(createHistory)();

render(
  <Router history={history}>
    <Route path="/" component={IntlProvider}>
      <IndexRedirect to="en" />
      <Route path=":locale" component={App} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
