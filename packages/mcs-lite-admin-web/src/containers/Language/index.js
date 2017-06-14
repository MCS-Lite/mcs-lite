import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import Language from './Language';

export const mapStateToProps = ({ routing }) => ({
  locale: R.pathOr(undefined, ['locationBeforeTransitions', 'query', 'locale'])(
    routing,
  ),
});

export default compose(
  connect(mapStateToProps),
  withGetMessages(messages, 'Language'),
)(Language);
