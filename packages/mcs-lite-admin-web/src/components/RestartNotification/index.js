import { withGetMessages } from 'react-intl-inject-hoc';
import RestartNotification from './RestartNotification';
import messages from './messages';

export default withGetMessages(messages, 'RestartNotification')(
  RestartNotification,
);
