import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'WebSocketNotification.info': {
    id: 'WebSocketNotification.info',
    description: 'Error message',
    defaultMessage: '目前網路連線斷線，請問要重新連線嗎？',
  },
  'WebSocketNotification.reconnect': {
    id: 'WebSocketNotification.reconnect',
    description: 'For button content',
    defaultMessage: '重新連線',
  },
});

export default messages;
