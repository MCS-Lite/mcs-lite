import { withGetMessages } from 'react-intl-inject-hoc';
import Section1 from './Section1';
import messages from './messages';

export default withGetMessages(messages, 'Section1')(Section1);
