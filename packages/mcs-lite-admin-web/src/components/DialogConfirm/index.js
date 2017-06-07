import { withGetMessages } from 'react-intl-inject-hoc';
import DialogConfirm from './DialogConfirm';
import messages from './messages';

export default withGetMessages(messages, 'DialogConfirm')(DialogConfirm);
