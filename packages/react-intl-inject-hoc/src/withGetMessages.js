import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';
import { injectIntl } from 'react-intl';

const withGetMessages = (messages, prefix) =>
  compose(
    injectIntl,
    withPropsOnChange(['intl'], ({ intl: { formatMessage } }) => ({
      getMessages: (id, value) =>
        formatMessage(messages[prefix ? `${prefix}.${id}` : id], value),
    })),
  );

export default withGetMessages;
