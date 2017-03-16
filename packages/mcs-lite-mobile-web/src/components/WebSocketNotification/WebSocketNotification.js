import React from 'react';
import styled from 'styled-components';
import { MobileContentWrapper, Notification, Button, P } from 'mcs-lite-ui';
import { withGetMessages } from 'react-intl-inject-hoc';
import Transition from 'react-motion-ui-pack';
import messages from './messages';

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

const WebSocketNotification = ({ onClick, getMessages: t }) =>
  <Fixed>
    <Wrapper>
      <Transition
        component={false}
        appear={{ opacity: 0.5, translateY: -40 }}
        enter={{ opacity: 1, translateY: 0 }}
      >
        <Notification key="notification">
          <P>{t('info')}</P>
          <Button onClick={onClick}>{t('reconnect')}</Button>
        </Notification>
      </Transition>
    </Wrapper>
  </Fixed>;

export default withGetMessages(messages, 'WebSocketNotification')(WebSocketNotification);
