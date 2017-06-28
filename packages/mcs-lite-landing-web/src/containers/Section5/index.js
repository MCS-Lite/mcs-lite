import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Section5 from './Section5';
import messages from './messages';

export default compose(withGetMessages(messages, 'Section5'), pure)(Section5);
