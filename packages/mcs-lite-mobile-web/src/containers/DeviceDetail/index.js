/* global window */

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

const wsHost = `ws://${window.location.hostname}:${process.env.REACT_APP_SOCKET_PORT}`;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectMCS(
    ({ device }) => device && `${wsHost}/deviceId/${device.deviceId}/deviceKey/${device.deviceKey}`,
    props => datapoint => props.setDatapoint(props.deviceId, datapoint),
    'sendMessage', // propsName
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
