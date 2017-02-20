import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceTriggerEdit from './DeviceTriggerEdit';

export default compose(
  connect(
    ({ devices }, { params: { deviceId }}) => ({
      deviceId,
      device: devices[deviceId],
    }),
    { fetchDeviceDetail: actions.fetchDeviceDetail },
  ),
  withGetMessages(messages, 'DeviceTriggerEdit'),
)(DeviceTriggerEdit);
