import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MobileContentWrapper from "mcs-lite-ui/lib/MobileContentWrapper";
import Notification from "mcs-lite-ui/lib/Notification";
import Button from "mcs-lite-ui/lib/Button";
import P from "mcs-lite-ui/lib/P";
import Transition from "react-motion-ui-pack";

const Fixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: ${props => props.theme.mobile.headerHeight};
  margin-top: 16px;
`;

const Wrapper = styled(MobileContentWrapper)`
  padding: 0 16px;
`;

const WebSocketNotification = ({ onClick, getMessages: t }) => (
  <Fixed>
    <Wrapper>
      <Transition
        component={false}
        appear={{ opacity: 0.5, translateY: -40 }}
        enter={{ opacity: 1, translateY: 0 }}
      >
        <Notification key="notification">
          <P>{t("info")}</P>
          <Button onClick={onClick}>{t("reconnect")}</Button>
        </Notification>
      </Transition>
    </Wrapper>
  </Fixed>
);

WebSocketNotification.displayName = "WebSocketNotification";
WebSocketNotification.propTypes = {
  // Props
  onClick: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired
};

export default WebSocketNotification;
