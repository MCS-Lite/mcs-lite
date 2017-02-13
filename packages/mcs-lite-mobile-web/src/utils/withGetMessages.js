import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';
import { injectIntl } from 'react-intl';

const withGetMessages = messages => compose(
  injectIntl,
  withPropsOnChange(['intl'], ({ intl: { formatMessage }}) => ({
    getMessages: id => formatMessage(messages[id]),
  })),
);

export default withGetMessages;
