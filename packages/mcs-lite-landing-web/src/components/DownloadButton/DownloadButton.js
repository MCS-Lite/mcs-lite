import React from 'react';
import PropTypes from 'prop-types';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import { getOSName, getFileName } from '../../utils/osHelper';
import SpaceTop from '../SpaceTop';

const OS_NAME = getOSName();
const FILE_NAME = getFileName();
const REPO_RELEASE_URL = 'https://github.com/MCS-Lite/mcs-lite-app/releases';
const LATEST_RELEASE = `${REPO_RELEASE_URL}/latest`;
const DOWNLOAD_LINK = `${REPO_RELEASE_URL}/download/v1.0.4/${FILE_NAME}`;

const Section1 = ({ getMessages: t }) =>
  <div>
    <A href={DOWNLOAD_LINK}>
      <Button>
        {t('downloadFor')} {OS_NAME}
      </Button>
    </A>
    <SpaceTop height={10}>
      <Small>
        {t('or')}&nbsp;
        <A href={LATEST_RELEASE} target="_blank" rel="noreferrer noopener">
          {t('others')}
        </A>
      </Small>
    </SpaceTop>
  </div>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section1;
