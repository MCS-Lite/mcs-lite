import React from 'react';
import PropTypes from 'prop-types';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';

const App = ({ getMessages: t }) =>
  <div>
    <div>
      <h2>{t('welcome')}</h2>
    </div>
    <a href="/zh-TW">zh-TW</a> |
    <a href="/en">en</a>
  </div>;

App.displayName = 'App';
App.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default withGetMessages(messages, 'App')(App);
