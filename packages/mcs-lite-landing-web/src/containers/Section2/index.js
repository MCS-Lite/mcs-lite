import { withGetMessages } from 'react-intl-inject-hoc';
import Section2 from './Section2';
import messages from './messages';

export default withGetMessages(messages, 'Section2')(Section2);
