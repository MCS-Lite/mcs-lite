import React from 'react';
import PropTypes from 'prop-types';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import { getOSName, getFileName } from 'mcs-lite-ui/lib/utils/osHelper';

const REPO_RELEASE_URL = 'https://github.com/MCS-Lite/mcs-lite-app/releases';
const LATEST_RELEASE = `${REPO_RELEASE_URL}/latest`;
const getDownloadLink = (tag, fileName) =>
  tag ? `${REPO_RELEASE_URL}/download/${tag}/${fileName}` : REPO_RELEASE_URL;

const DownloadButton = ({ tag, getMessages: t }) => {
  const osName = getOSName();
  const fileName = getFileName();

  return (
    <div>
      <A href={getDownloadLink(tag, fileName)}>
        <Button>
          {t('downloadFor')} {osName}
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
    </div>
  );
};

DownloadButton.displayName = 'DownloadButton';
DownloadButton.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // Props
  tag: PropTypes.string,
};

export default DownloadButton;
