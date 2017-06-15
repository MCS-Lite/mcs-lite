import React from 'react';
import PropTypes from 'prop-types';
import { withGetMessages } from 'react-intl-inject-hoc';
import { Link } from 'react-router';
import { Page, Row, Column } from 'hedron';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Button from 'mcs-lite-ui/lib/Button';
import messages from './messages';

const App = ({ getMessages: t }) =>
  <Page width="200px">
    <Row>
      <Column sm={8} smShift={2} lg={6} lgShift={3}>
        <h1>
          But you can change the amount of columns by adding the
          `divisions` property to a Row.
        </h1>
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
        <p>
          But you can change the amount of columns by adding the
          `divisions` property to a Row.
        </p>
      </Column>
      <Column fluid sm={4}>
        <Row divisions={24}>
          <Column sm={24}>
            <p>
              But you can change the amount of columns by adding the
              `divisions` property to a Row.
            </p>

          </Column>
        </Row>
      </Column>
    </Row>
    <Row>
      <Column fluid sm={12}>
        <h1>Fluid Columns Button</h1>
        <ScrollOverPack playScale={[0.1, 0.9]}>
          <div key="button">
            <Button>Button2</Button>
          </div>
        </ScrollOverPack>
        <ScrollParallax
          animation={{ opacity: 1 }}
          always={false}
          style={{ opacity: 0, paddingTop: 60 }}
        >
          <Button>Button3</Button>
        </ScrollParallax>
        <ScrollParallax
          animation={{ opacity: 1 }}
          always={false}
          style={{ opacity: 0, paddingTop: 60 }}
        >
          <Button>Button4</Button>
        </ScrollParallax>
      </Column>
      <Column fluid sm={12}>
        <p>
          But you can change the amount of columns by adding the
          `divisions` property to a Row.
        </p>
      </Column>
      <Column fluid sm={12}>
        <Row divisions={24}>
          <Column sm={24}>
            <p>
              But you can change the amount of columns by adding the
              `divisions` property to a Row.
            </p>
            <p>
              But you can change the amount of columns by adding the
              `divisions` property to a Row.
            </p>
            <p>
              But you can change the amount of columns by adding the
              `divisions` property to a Row.
            </p>
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
