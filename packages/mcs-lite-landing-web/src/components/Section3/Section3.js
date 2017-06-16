import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import Img from 'mcs-lite-ui/lib/Img';
import B from 'mcs-lite-ui/lib/B';
import SectionRow from '../SectionRow';

const Section3 = () =>
  <SectionRow>
    <Column xs={12}>
      <Heading level={2}>
        Explore our features and service
      </Heading>
      <P>
        Start to collect data from your IoT device and control them anytime,
        anywhere.
      </P>
    </Column>

    <Column xs={12}>
      <Row>
        <Column xs={4} xm={3} md={2} mdShift={1}>
          <img src="http://placehold.it/80x80" />
          <Heading level={2}>
            <B>Data collection</B>
          </Heading>
          <P>Collect and visualize data from your devices.</P>
        </Column>
        <Column xs={4} xm={3} md={2}>
          <img src="http://placehold.it/80x80" />
          <Heading level={2}>
            <B>Data collection</B>
          </Heading>
          <P>Collect and visualize data from your devices.</P>
        </Column>
        <Column xs={4} xm={3} md={2}>
          <img src="http://placehold.it/80x80" />
          <Heading level={2}>
            <B>Data collection</B>
          </Heading>
          <P>Collect and visualize data from your devices.</P>
        </Column>
        <Column xs={4} xm={3} md={2}>
          <img src="http://placehold.it/80x80" />
          <Heading level={2}>
            <B>Data collection</B>
          </Heading>
          <P>Collect and visualize data from your devices.</P>
        </Column>
        <Column xs={4} xm={3} md={2}>
          <img src="http://placehold.it/80x80" />
          <Heading level={2}>
            <B>Data collection</B>
          </Heading>
          <P>Collect and visualize data from your devices.</P>
        </Column>
      </Row>
    </Column>
  </SectionRow>;

Section3.displayName = 'Section3';
Section3.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section3;
