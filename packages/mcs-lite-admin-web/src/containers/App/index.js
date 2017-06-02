import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import App from './App';

export const mapStateToProps = ({ ui }) => ({
  toasts: ui.toasts,
  isLoading: ui.isLoading,
});

export default compose(
  connect(mapStateToProps),
  withGetMessages(messages, 'App'),
)(App);
