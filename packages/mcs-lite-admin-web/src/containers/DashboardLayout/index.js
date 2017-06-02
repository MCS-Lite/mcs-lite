import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/auth';
import DashboardLayout from './DashboardLayout';

export const mapStateToProps = ({ ui }) => ({
  toasts: ui.toasts,
  isLoading: ui.isLoading,
});

export const mapDispatchToProps = { signout: actions.signout };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DashboardLayout'),
)(DashboardLayout);
