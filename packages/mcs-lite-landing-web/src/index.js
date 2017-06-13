/* global window,document */

import 'normalize.css';
import React from 'react';
import { render } from 'react-snapshot';
import { IntlProvider } from 'react-intl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './utils/i18n';

const messages = {
  'zh-TW': {
    'App.welcome': '歡迎！',
  },
  en: {
    'App.welcome': 'Welcome!',
  },
};
const locale = window.location.pathname.replace('/', '') || 'en';

render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
