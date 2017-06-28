import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Section3 from './Section3';
import messages from './messages';

export default compose(withGetMessages(messages, 'Section3'), pure)(Section3);
