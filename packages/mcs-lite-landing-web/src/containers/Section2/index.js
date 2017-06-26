import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Section2 from './Section2';
import messages from './messages';

export default compose(pure, withGetMessages(messages, 'Section2'))(Section2);
