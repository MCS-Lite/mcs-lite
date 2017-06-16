import React from 'react';
import PropTypes from 'prop-types';
import { withGetMessages } from 'react-intl-inject-hoc';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import Footer from '../../components/Footer';
import messages from './messages';

const App = ({ getMessages: t }) =>
  <div>
    {/* 1. Helmet */}
    <Helmet titleTemplate={`%s | ${t('titleTemplate')}`}>
      <title>{t('welcome')}</title>
    </Helmet>

    <Link to="/en">English</Link>
    <Link to="/zh-TW">繁中</Link>

    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />

    <Footer />
  </div>;

App.displayName = 'App';
App.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default withGetMessages(messages, 'App')(App);
