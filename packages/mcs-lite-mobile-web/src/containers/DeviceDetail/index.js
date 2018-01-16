/* global window */

import { connect } from 'react-redux';
import * as R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import { connectSocket } from 'mcs-lite-connect';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceDetail from './DeviceDetail';

export const mapStateToProps = ({ devices, ui }, { params: { deviceId } }) => ({
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

const protocol = /https/.test(window.location.protocol) ? 'wss' : 'ws';
const wsHost = `${protocol}://${window.location.hostname}:${
  window.SOCKET_PORT
}`;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectSocket(
    // 1. urlMapper => (ownerProps: Object) => string
    ({ deviceId, deviceKey }) =>
      deviceKey && `${wsHost}/deviceId/${deviceId}/deviceKey/${deviceKey}`,
    // 2. onMessage => (ownerProps: Object) => datapoint => void
    props => datapoint => props.setDatapoint(props.deviceId, datapoint, true),
    // 3. propsMapper => state => props
    ({ readyState, send, createWebSocket }) => ({
      sendMessage: send,
      isWebSocketClose: readyState.sender === 3 || readyState.viewer === 3,
      reconnect: createWebSocket,
    }),
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
