import { withGetMessages } from 'react-intl-inject-hoc';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import Header from './Header';
import messages from './messages';

export default compose(withGetMessages(messages, 'Header'), withRouter)(Header);
