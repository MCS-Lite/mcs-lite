import { withGetMessages } from 'react-intl-inject-hoc';
import Header from './Header';
import messages from './messages';

export default withGetMessages(messages, 'Header')(Header);
