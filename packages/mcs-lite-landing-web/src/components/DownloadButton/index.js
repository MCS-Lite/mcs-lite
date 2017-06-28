import { withGetMessages } from 'react-intl-inject-hoc';
import { compose, pure } from 'recompose';
import DownloadButton from './DownloadButton';
import messages from './messages';

export default compose(withGetMessages(messages, 'DownloadButton'), pure)(
  DownloadButton,
);
