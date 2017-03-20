/* global window */

import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import { connectSocket } from 'mcs-lite-connect';
import messages from './messages';
import { actions as devicesActions } from '../../modules/devices';
import { actions as datapointsActions } from '../../modules/datapoints';
import DeviceDataChannelDetail from './DeviceDataChannelDetail';
import localTimeFormat from '../../utils/localTimeFormat';

export const mapStateToProps = (
  { devices, datapoints },
  { params: { deviceId, dataChannelId }},
) => ({
  deviceId,
  dataChannelId,
  datachannel: R.pipe(
    R.pathOr([], [deviceId, 'datachannels']),
    R.find(R.propEq('datachannelId', dataChannelId)),
  )(devices),
  data: R.pipe(
    R.pathOr([], [dataChannelId, 'data']),
    R.map(d => ({
      value: parseInt(d.values.value, 10),
      updatedAt: localTimeFormat(d.updatedAt),
    })),
  )(datapoints),

  // For WebSocket Config
  deviceKey: R.pathOr(undefined, [deviceId, 'deviceKey'])(devices),
});
export const mapDispatchToProps = {
  fetchDeviceDetail: devicesActions.fetchDeviceDetail,
  fetchDatapoints: datapointsActions.fetchDatapoints,
  setDatapoint: devicesActions.setDatapoint,
  setQuery: datapointsActions.setQuery,
};

const wsHost = `ws://${window.location.hostname}:${window.SOCKET_PORT}`;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectSocket(
    // 1. urlMapper => (ownerProps: Object) => string
    ({ deviceId, deviceKey }) => deviceKey
      && `${wsHost}/deviceId/${deviceId}/deviceKey/${deviceKey}`,

    // 2. onMessage => (ownerProps: Object) => datapoint => void
    props => datapoint => props.setDatapoint(props.deviceId, datapoint, true),

    // 3. propsMapper => state => props
    ({ readyState, send, createWebSocket }) => ({
      sendMessage: send,
      isWebSocketClose: readyState.sender === 3 || readyState.viewer === 3,
      reconnect: createWebSocket,
    }),
  ),
  withGetMessages(messages, 'DeviceDataChannelDetail'),
)(DeviceDataChannelDetail);
