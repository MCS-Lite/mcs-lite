import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Footer from './Footer';
import messages from './messages';

export default compose(pure, withGetMessages(messages, 'Footer'))(Footer);
