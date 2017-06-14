import React from 'react';
import PropTypes from 'prop-types';
import { withGetMessages } from 'react-intl-inject-hoc';
import { Link } from 'react-router';
import { Page, Row, Column } from 'hedron';
import Button from 'mcs-lite-ui/lib/Button';
import messages from './messages';

const App = ({ getMessages: t }) =>
  <Page width="1200px">
    <Row>
      <Column sm={8} smShift={2} lg={6} lgShift={3}>
        <h1>This is a column that's centered using the shift props</h1>

        <div>
          <div>
            <h2>{t('welcome')}</h2>
          </div>
          <Link to="/zh-TW">zh-TW</Link> |
          <Link to="/en">en</Link>
        </div>
      </Column>
    </Row>
    <Row>
      <Column fluid sm={4}>
        <h1>Fluid Columns</h1>
        <Button>Button</Button>
      </Column>
      <Column fluid sm={4}>
        <p>It's a 12 column layout by default.</p>
      </Column>
      <Column fluid sm={4}>
        <Row divisions={24}>
          <Column sm={24}>
            <p>
              But you can change the amount of columns by adding the
              `divisions` property to a Row.
            </p>
            <p>It's fully embeddable as well!</p>
          </Column>
        </Row>
      </Column>
    </Row>
  </Page>;

App.displayName = 'App';
App.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default withGetMessages(messages, 'App')(App);
