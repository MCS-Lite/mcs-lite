import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions as authActions } from '../../modules/auth';
import Signin from './Signin';

export default compose(
  connect(
    null,
    {
      tryEnter: authActions.tryEnter,
    },
  ),
  withGetMessages(messages, 'Signin'),
)(Signin);
