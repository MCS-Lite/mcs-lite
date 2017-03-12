import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import DeviceDetailInfo from './DeviceDetailInfo';
import messages from './messages';
import { actions } from '../../modules/devices';

export const mapStateToProps = ({ devices }, { params: { deviceId }}) => ({
  deviceId,
  device: devices[deviceId],
});
export const mapDispatchToProps = { fetchDeviceDetail: actions.fetchDeviceDetail };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceDetailInfo'),
)(DeviceDetailInfo);
