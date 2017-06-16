import { withGetMessages } from 'react-intl-inject-hoc';
import Footer from './Footer';
import messages from './messages';

export default withGetMessages(messages, 'Footer')(Footer);
