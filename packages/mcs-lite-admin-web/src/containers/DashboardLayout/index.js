import { connect } from 'react-redux';
import compose from 'recompose/compose';
import R from 'ramda';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions as authActions } from '../../modules/auth';
import { actions as serviceActions } from '../../modules/service';
import DashboardLayout from './DashboardLayout';

export const mapStateToProps = ({ service, ui, system }) => ({
  isStarted: R.complement(R.isEmpty)(service),
  isNedb: R.pipe(R.prop('db'), JSON.parse, R.propEq('db', 'nedb'))(system),
  isRestartRequired: ui.isRestartRequired,
});

export const mapDispatchToProps = {
  signout: authActions.signout,
  start: serviceActions.start,
  stop: serviceActions.stop,
  restart: serviceActions.restart,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DashboardLayout'),
)(DashboardLayout);
