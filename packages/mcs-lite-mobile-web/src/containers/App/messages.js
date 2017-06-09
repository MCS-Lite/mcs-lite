import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'App.titleTemplate': {
    id: 'App.titleTemplate',
    description: 'For document title',
    defaultMessage: 'MCS Lite Mobile',
  },
  'App.gerenalError': {
    id: 'App.gerenalError',
    description: 'With HTTP error status code 401/500',
    defaultMessage: '我們目前無法處理您的請求。請稍後再試。',
  },
});

export default messages;
