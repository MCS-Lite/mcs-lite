import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import { actions } from '../../modules/auth';
import Account from './Account';
import messages from './messages';

export const mapStateToProps = ({ auth }) => ({
  userName: auth.userName,
  email: auth.email,
});
export const mapDispatchToProps = { signout: actions.signout };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'Account')
)(Account);
