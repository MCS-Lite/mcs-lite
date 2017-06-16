import { withGetMessages } from 'react-intl-inject-hoc';
import Section4 from './Section4';
import messages from './messages';

export default withGetMessages(messages, 'Section4')(Section4);
