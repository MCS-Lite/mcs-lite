import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import DownloadButton from '../../components/DownloadButton';
import {
  StyledSectionRow,
  RWDCenterWrapper,
  StyledImageColumn,
} from './styled-components';
import Image from './Image';

const Section1 = ({ getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12} md={6}>
      <RWDCenterWrapper>
        <Heading level={1}>{t('title')}</Heading>

        <SpaceTop height={20}>
          <Heading level={4} color="grayBase">{t('desc')}</Heading>
        </SpaceTop>

        <SpaceTop height={40}>
          <DownloadButton />
        </SpaceTop>
      </RWDCenterWrapper>
    </Column>

    <StyledImageColumn xs={12} md={6}>
      <Image />
    </StyledImageColumn>
  </StyledSectionRow>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section1;
