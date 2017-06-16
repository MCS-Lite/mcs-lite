import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import TextCenter from '../../components/TextCenter';
import DownloadButton from '../../components/DownloadButton';
import mac from '../../statics/images/mac.svg';

const Section5 = ({ getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
        <SpaceTop height={40}>
          <img src={mac} alt="mac" />
        </SpaceTop>
        <SpaceTop height={40}>
          <DownloadButton />
        </SpaceTop>
      </TextCenter>
    </Column>
  </SectionRow>;

Section5.displayName = 'Section5';
Section5.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section5;
