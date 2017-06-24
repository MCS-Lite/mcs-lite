import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import SectionRow from '../../components/SectionRow';
import { PADDING } from '../../components/SectionRow/SectionRow';
import DownloadButton from '../../components/DownloadButton';
import screen from '../../statics/images/screen.svg';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FAFAFA 0%, #F1F2F7 100%);
`;

const StyledImageColumn = styled(Column)`
  margin-bottom: -${PADDING}px;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: flex-end;

  img {
    height: 500px;
  }
`;

const Section1 = ({ tag, getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12} sm={6}>
      <Heading level={1}>{t('title')}</Heading>
      <SpaceTop height={20}>
        <Heading level={4} color="grayBase">{t('desc')}</Heading>
      </SpaceTop>
      <SpaceTop height={40}>
        <DownloadButton tag={tag} />
      </SpaceTop>
    </Column>
    <StyledImageColumn xs={12} sm={6}>
      <img src={screen} alt="screen" />
    </StyledImageColumn>
  </StyledSectionRow>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // Props
  tag: PropTypes.string,
};

export default Section1;
