import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions as authActions } from '../../modules/auth';
import Signin from './Signin';

export const mapStateToProps = null;
export const mapDispatchToProps = { tryEnter: authActions.tryEnter };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'Signin'),
)(Signin);
