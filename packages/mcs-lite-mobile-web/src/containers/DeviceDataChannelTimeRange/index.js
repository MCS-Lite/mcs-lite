import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions as devicesActions } from '../../modules/devices';
import { actions as datapointsActions } from '../../modules/datapoints';
import DeviceDataChannelTimeRange from './DeviceDataChannelTimeRange';

export const mapStateToProps = (
  { devices, ui, datapoints },
  { params: { deviceId, dataChannelId }},
) => ({
  deviceId,
  dataChannelId,
  device: devices[deviceId],
  isLoading: ui.isLoading,
  query: R.pathOr({}, [dataChannelId, 'query'])(datapoints),
});
export const mapDispatchToProps = {
  fetchDeviceDetail: devicesActions.fetchDeviceDetail,
  setQuery: datapointsActions.setQuery,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceDataChannelTimeRange'),
)(DeviceDataChannelTimeRange);
