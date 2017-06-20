import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import TextCenter from '../../components/TextCenter';
import DownloadButton from '../../components/DownloadButton';
import imgSetup from '../../statics/images/img_setup.svg';

const StyledImg = styled.img`
  max-width: 100%;
`;

const Section5 = ({ tag, getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
        <SpaceTop height={40}>
          <StyledImg src={imgSetup} title={t('title')} alt={t('title')} />
        </SpaceTop>
        <SpaceTop height={40}>
          <DownloadButton tag={tag} />
        </SpaceTop>
      </TextCenter>
    </Column>
  </SectionRow>;

Section5.displayName = 'Section5';
Section5.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // Props
  tag: PropTypes.string,
};

export default Section5;
