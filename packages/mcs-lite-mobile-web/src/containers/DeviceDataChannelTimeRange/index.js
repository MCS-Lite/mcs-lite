import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions as devicesActions } from '../../modules/devices';
import { actions as datapointsActions } from '../../modules/datapoints';
import DeviceDataChannelTimeRange from './DeviceDataChannelTimeRange';

const getCurrent = () => new Date().valueOf();

export const mapStateToProps = (
  { datapoints },
  { params: { deviceId, dataChannelId }},
) => ({
  deviceId,
  dataChannelId,
  start: R.pathOr(
    getCurrent(),
    [dataChannelId, 'query', 'start'],
  )(datapoints),
  end: R.pathOr(
    getCurrent(),
    [dataChannelId, 'query', 'end'],
  )(datapoints),
});
export const mapDispatchToProps = {
  fetchDeviceDetail: devicesActions.fetchDeviceDetail,
  setQuery: datapointsActions.setQuery,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceDataChannelTimeRange'),
)(DeviceDataChannelTimeRange);
