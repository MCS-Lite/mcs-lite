import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/auth';
import Password from './Password';

export const mapStateToProps = null;
export const mapDispatchToProps = { changePassword: actions.changePassword };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'Password'),
)(Password);
