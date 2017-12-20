import { withGetMessages } from 'react-intl-inject-hoc';
import { compose } from 'recompose';
import DownloadButton from './DownloadButton';
import messages from './messages';

export default compose(withGetMessages(messages, 'DownloadButton'))(
  DownloadButton,
);
