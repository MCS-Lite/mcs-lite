/* global window */

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import { connectSocket } from 'mcs-lite-connect';
import messages from './messages';
import { actions as devicesActions } from '../../modules/devices';
import { actions as datapointsActions } from '../../modules/datapoints';
import DeviceDataChannelDetail from './DeviceDataChannelDetail';

export const mapStateToProps = (
  { devices, ui, datapoints },
  { params: { deviceId, dataChannelId }},
) => ({
  deviceId,
  dataChannelId,
  device: devices[deviceId],
  isLoading: ui.isLoading,
  datapoints: datapoints[dataChannelId],
});
export const mapDispatchToProps = {
  fetchDeviceDetail: devicesActions.fetchDeviceDetail,
  fetchDatapoints: datapointsActions.fetchDatapoints,
  setDatapoint: devicesActions.setDatapoint,
};

const wsHost = `ws://${window.location.hostname}:${process.env.REACT_APP_SOCKET_PORT}`;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectSocket(
    ({ device }) => device && `${wsHost}/deviceId/${device.deviceId}/deviceKey/${device.deviceKey}`,
    props => datapoint => props.setDatapoint(props.deviceId, datapoint, true),
    'sendMessage', // propsName
  ),
  withGetMessages(messages, 'DeviceDataChannelDetail'),
)(DeviceDataChannelDetail);
