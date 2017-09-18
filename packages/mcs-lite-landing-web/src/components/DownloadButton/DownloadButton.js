import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import Small from 'mcs-lite-ui/lib/Small';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import { getOSName, getFileName } from 'mcs-lite-ui/lib/utils/osHelper';

const StyledButton = styled(Button)`
  width: 220px;
`;

const DownloadButton = ({ getMessages: t }) => {
  const osName = getOSName();
  const fileName = getFileName().split('.')[0];

  return (
    <div>
      <A
        href={`//micro-github-latest.now.sh/mcs-lite/mcs-lite-app/${fileName}/latest`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <StyledButton>
          {t('downloadFor')} {osName}
        </StyledButton>
      </A>

      <SpaceTop height={10}>
        <Small>
          {t('or')}&nbsp;
          <A
            href="//github.com/mcs-lite/mcs-lite-app/releases/latest"
            target="_blank"
            rel="noreferrer noopener"
          >
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
};

export default DownloadButton;
