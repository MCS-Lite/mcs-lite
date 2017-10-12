import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toast, { StyledP } from 'mcs-lite-ui/lib/Toast/Toast';
import A from 'mcs-lite-ui/lib/A';
import Transition from 'react-motion-ui-pack';
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

  > ${StyledP} {
    justify-content: space-between;
  }
`;

const RestartNotification = ({ onClick, getMessages: t }) =>
  <Container>
    <Fixed>
      <Transition
        component={false}
        enter={{ translateY: 0, opacity: 1 }}
        leave={{ translateY: -10, opacity: 0.5 }}
      >
        <StyledToast key="StyledToast" kind="warning">
          <div>
            {t('restartRequired')}
          </div>
          <A onClick={onClick}>
            {t('restart')}
          </A>
        </StyledToast>
      </Transition>
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
