import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import { actions } from '../../modules/auth';
import Account from './Account';
import messages from './messages';

export default compose(
  connect(
    ({ auth }) => ({ userName: auth.userName }),
    { signout: actions.signout },
  ),
  withGetMessages(messages, 'Account'),
)(Account);
