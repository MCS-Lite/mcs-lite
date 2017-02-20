import { connect } from 'react-redux';
import compose from 'recompose/compose';
import DeviceDetailInfo from './DeviceDetailInfo';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';

export default compose(
  connect(
    ({ devices, ui }, { params: { deviceId }}) => ({
      deviceId,
      device: devices[deviceId],
      isLoading: ui.isLoading,
    }),
    { fetchDeviceDetail: actions.fetchDeviceDetail },
  ),
  withGetMessages(messages, 'DeviceDetailInfo'),
)(DeviceDetailInfo);
