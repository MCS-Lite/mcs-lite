/* global window */

import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import { connectSocket } from 'mcs-lite-connect';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceDetail from './DeviceDetail';

export const mapStateToProps = ({ devices, ui }, { params: { deviceId }}) => ({
  deviceId,
  device: R.pathOr({}, [deviceId])(devices),
  isLoading: ui.isLoading,

  // For WebSocket Config
  deviceKey: R.pathOr(undefined, [deviceId, 'deviceKey'])(devices),
});
export const mapDispatchToProps = {
  fetchDeviceDetail: actions.fetchDeviceDetail,
  setDatapoint: actions.setDatapoint,
};

const wsHost = `ws://${window.location.hostname}:${process.env.REACT_APP_SOCKET_PORT}`;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectSocket(
    ({ deviceId, deviceKey }) => deviceKey
      && `${wsHost}/deviceId/${deviceId}/deviceKey/${deviceKey}`,
    props => datapoint => props.setDatapoint(props.deviceId, datapoint, true),
    'sendMessage', // propsName
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
