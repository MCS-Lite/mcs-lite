import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceDetail from './DeviceDetail';
import connectMCS from '../../utils/connectMCS';

export const mapStateToProps = ({ devices, ui }, { params: { deviceId }}) => ({
  deviceId,
  device: devices[deviceId],
  isLoading: ui.isLoading,
});
export const mapDispatchToProps = { fetchDeviceDetail: actions.fetchDeviceDetail };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectMCS(
    'sendMessage', // propsName
    ({ device }) => device && `ws://localhost:8000/deviceId/${device.deviceId}/deviceKey/${device.deviceKey}`,
    props => e => console.log(props.fetchDeviceDetail, e),
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
