import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceList from './DeviceList';

export const mapStateToProps = ({ devices, ui }) => ({
  devices: R.values(devices),
  isLoading: ui.isLoading,
});
export const mapDispatchToProps = { fetchDeviceList: actions.fetchDeviceList };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceList'),
)(DeviceList);
