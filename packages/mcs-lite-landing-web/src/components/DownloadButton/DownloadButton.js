import React from 'react';
import PropTypes from 'prop-types';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import SpaceTop from '../SpaceTop';

const LATEST_RELEASE =
  'https://github.com/MCS-Lite/mcs-lite-app/releases/latest';

const Section1 = ({ getMessages: t }) =>
  <div>
    <Button>{t('downloadFor')}</Button>
    <SpaceTop height={10}>
      <Small>
        {t('or')}&nbsp;
        <A href={LATEST_RELEASE}>{t('others')}</A>
      </Small>
    </SpaceTop>
  </div>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section1;
