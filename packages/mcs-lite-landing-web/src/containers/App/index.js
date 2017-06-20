import { withGetMessages } from 'react-intl-inject-hoc';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import App from './App';
import messages from './messages';

export default compose(withGetMessages(messages, 'App'), withRouter)(App);
