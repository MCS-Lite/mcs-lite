import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import Ip from './Ip';

export const mapStateToProps = ({ ui }) => ({
  toasts: ui.toasts,
});

export default compose(
  connect(mapStateToProps),
  withGetMessages(messages, 'Ip'),
)(Ip);
