import { withGetMessages } from 'react-intl-inject-hoc';
import { withRouter } from 'react-router';
import { compose, pure } from 'recompose';
import App from './App';
import messages from './messages';

export default compose(pure, withGetMessages(messages, 'App'), withRouter)(App);
