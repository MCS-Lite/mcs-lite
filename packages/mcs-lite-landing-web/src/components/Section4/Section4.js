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

const Section4 = () =>
  <SectionRow>
    <Column xs={12}>
      <Heading level={2}>
        Get more benefits from MCS Lite
      </Heading>
      <P>
        Now, you can have your IoT platform go-live with ease, more flexibility
        and agility.
      </P>
    </Column>

    <Column xs={12}>
      <Row>
        <Column xs={6}>
          <img src="http://placehold.it/200x200" />
          <Heading level={2}>
            <B>Open Source</B>
          </Heading>
          <P>
            MCSLite is distributed as an open-source software under MIT license.
            You can use, copy, modify, merge, publish, distribute, sublicense
            our projects.
          </P>
          <Button>Follow us on GitHub</Button>
        </Column>
        <Column xs={6}>
          <img src="http://placehold.it/200x200" />
          <Heading level={2}>
            <B>Open Source</B>
          </Heading>
          <P>
            MCSLite is distributed as an open-source software under MIT license.
            You can use, copy, modify, merge, publish, distribute, sublicense
            our projects.
          </P>
          <Button>Follow us on GitHub</Button>
        </Column>
      </Row>
    </Column>
  </SectionRow>;

Section4.displayName = 'Section4';
Section4.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section4;
