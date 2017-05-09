import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'WebSocketNotification.info': {
    id: 'WebSocketNotification.info',
    description: 'Error message',
    defaultMessage: '伺服器連線異常，目前無法即時上傳與接收資料，是否要重新連線？',
  },
  'WebSocketNotification.reconnect': {
    id: 'WebSocketNotification.reconnect',
    description: 'For button content',
    defaultMessage: '重新連線',
  },
});

export default messages;
