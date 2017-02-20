import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/auth';
import Password from './Password';

export default compose(
  connect(
    null,
    { changePassword: actions.changePassword },
  ),
  withGetMessages(messages, 'Password'),
)(Password);
