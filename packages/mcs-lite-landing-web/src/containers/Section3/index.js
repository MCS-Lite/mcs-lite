import { withGetMessages } from 'react-intl-inject-hoc';
import Section3 from './Section3';
import messages from './messages';

export default withGetMessages(messages, 'Section3')(Section3);
