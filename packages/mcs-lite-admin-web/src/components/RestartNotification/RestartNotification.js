import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toast from 'mcs-lite-ui/lib/Toast';
import A from 'mcs-lite-ui/lib/A';
import { NAV_WIDTH } from '../../containers/DashboardLayout/styled-components';

const Container = styled.div`
  height: ${props => props.theme.height.normal};
  margin: -20px -20px 20px -20px;
`;

const Fixed = styled.div`
  position: fixed;
  right: 0;
  left: ${NAV_WIDTH}px;
`;

const StyledToast = styled(Toast)`
  border: none;
  box-shadow: none;

  > div {
    justify-content: space-between;
  }
`;

const RestartNotification = ({ onClick, getMessages: t }) =>
  <Container>
    <Fixed>
      <StyledToast kind="warning">
        <div>
          {t('restartRequired')}
        </div>
        <A onClick={onClick}>
          {t('restart')}
        </A>
      </StyledToast>
    </Fixed>
  </Container>;

RestartNotification.displayName = 'RestartNotification';
RestartNotification.propTypes = {
  // Props
  onClick: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default RestartNotification;
