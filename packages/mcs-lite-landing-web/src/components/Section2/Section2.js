import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import Img from 'mcs-lite-ui/lib/Img';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SectionRow from '../SectionRow';

const Section2 = () =>
  <SectionRow>
    <Column xs={12}>
      <Heading level={2}>
        Right after you launch MCS Lite Application
      </Heading>
      <P>
        You can run an IoT platform from your computer. MCS Lite an be deployed
        on-premises or on a public cloud and be adopted during prototyping,
        developing or production stage in various industries.
      </P>

      <ScrollParallax
        animation={{ opacity: 1, y: 0, playScale: [0, 1] }}
        always={false}
        style={{ opacity: 0.6, transform: 'translateY(50px)' }}
      >
        <img src="http://placehold.it/350x150" />
      </ScrollParallax>
    </Column>
  </SectionRow>;

Section2.displayName = 'Section2';
Section2.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section2;
