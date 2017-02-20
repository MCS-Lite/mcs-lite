import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceTrigger from './DeviceTrigger';

export default compose(
  connect(
    ({ devices, ui }, { params: { deviceId }}) => ({
      deviceId,
      device: devices[deviceId],
      isLoading: ui.isLoading,
    }),
    { fetchDeviceDetail: actions.fetchDeviceDetail },
  ),
  withGetMessages(messages, 'DeviceTrigger'),
)(DeviceTrigger);
