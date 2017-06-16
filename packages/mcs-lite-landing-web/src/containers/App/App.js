import React from 'react';
import PropTypes from 'prop-types';
import { withGetMessages } from 'react-intl-inject-hoc';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Page, Row, Column } from 'hedron';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Button from 'mcs-lite-ui/lib/Button';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
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

    <Page width="960px">
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
    </Page>
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
  </div>;

App.displayName = 'App';
App.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default withGetMessages(messages, 'App')(App);
