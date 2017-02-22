import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceDataChannelDetail from './DeviceDataChannelDetail';

export const mapStateToProps = ({ devices, ui }, { params: { deviceId, dataChannelId }}) => ({
  deviceId,
  dataChannelId,
  device: devices[deviceId],
  isLoading: ui.isLoading,
});
export const mapDispatchToProps = { fetchDeviceDetail: actions.fetchDeviceDetail };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceDataChannelDetail'),
)(DeviceDataChannelDetail);
