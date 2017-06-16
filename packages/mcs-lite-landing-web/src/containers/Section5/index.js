import { withGetMessages } from 'react-intl-inject-hoc';
import Section5 from './Section5';
import messages from './messages';

export default withGetMessages(messages, 'Section5')(Section5);
