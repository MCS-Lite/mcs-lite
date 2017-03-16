import { withGetMessages } from 'react-intl-inject-hoc';
import compose from 'recompose/compose';
import messages from './messages';
import WebSocketNotification from './WebSocketNotification';

export default compose(
  withGetMessages(messages, 'WebSocketNotification'),
)(WebSocketNotification);
