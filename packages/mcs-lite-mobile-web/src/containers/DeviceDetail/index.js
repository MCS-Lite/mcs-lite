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
export const mapDispatchToProps = {
  fetchDeviceDetail: actions.fetchDeviceDetail,
  setDatapoint: actions.setDatapoint,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectMCS(
    ({ device }) => device && `ws://nb14090119.local:8000/deviceId/${device.deviceId}/deviceKey/${device.deviceKey}`,
    props => datapoint => props.setDatapoint(props.deviceId, datapoint),
    'sendMessage', // propsName
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
