import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Footer from './Footer';
import messages from './messages';

export default compose(withGetMessages(messages, 'Footer'), pure)(Footer);
