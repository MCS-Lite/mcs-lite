import { withGetMessages } from 'react-intl-inject-hoc';
import DownloadButton from './DownloadButton';
import messages from './messages';

export default withGetMessages(messages, 'DownloadButton')(DownloadButton);
