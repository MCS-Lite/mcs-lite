import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Section1 from './Section1';
import messages from './messages';

export default compose(withGetMessages(messages, 'Section1'), pure)(Section1);
