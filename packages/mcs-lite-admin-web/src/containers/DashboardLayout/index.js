import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions as authActions } from '../../modules/auth';
import { actions as serviceActions } from '../../modules/service';
import DashboardLayout from './DashboardLayout';

export const mapStateToProps = ({ service }) => ({
  isStarted: service.isStarted,
});

export const mapDispatchToProps = {
  signout: authActions.signout,
  start: serviceActions.start,
  stop: serviceActions.stop,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DashboardLayout'),
)(DashboardLayout);
