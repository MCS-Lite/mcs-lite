import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import Img from 'mcs-lite-ui/lib/Img';
import SectionRow from '../SectionRow';

const Section1 = () =>
  <SectionRow>
    <Column xs={12} sm={6}>
      <Heading level={1}>
        Build you IoT platform with ease and flexibility.
      </Heading>
      <P>
        MCS Lite is a cross-platform application for Windows, Linux and Mac OS
        and it is derived from the major features of MCS online with easy-to-use
        user interface.
      </P>
      <div>
        <Button>Download for Mac</Button>
      </div>
      <Small>or Download for other platforms or version</Small>
    </Column>

    <Column xs={12} sm={6}>
      <Img src="http://placehold.it/350x150" />
    </Column>
  </SectionRow>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section1;
