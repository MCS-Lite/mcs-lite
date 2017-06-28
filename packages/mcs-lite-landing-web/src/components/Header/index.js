import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Header from './Header';
import messages from './messages';

export default compose(withGetMessages(messages, 'Header'), pure)(Header);
