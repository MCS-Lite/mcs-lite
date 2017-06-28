import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import Section4 from './Section4';
import messages from './messages';

export default compose(withGetMessages(messages, 'Section4'), pure)(Section4);
