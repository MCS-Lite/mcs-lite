import { connect } from 'react-redux';
import * as R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions as authActions } from '../../modules/auth';
import Signup from './Signup';

export const mapStateToProps = ({ routing }) => ({
  errorMessage: R.pathOr(undefined, [
    'locationBeforeTransitions',
    'query',
    'errorMsg',
  ])(routing),
});
export const mapDispatchToProps = { tryEnter: authActions.tryEnter };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'Signup'),
)(Signup);
