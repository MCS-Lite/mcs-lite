import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceList from './DeviceList';

export default compose(
  connect(
    ({ devices, ui }) => ({
      devices: R.values(devices),
      isLoading: ui.isLoading,
    }),
    { fetchDeviceList: actions.fetchDeviceList },
  ),
  withGetMessages(messages, 'DeviceList'),
)(DeviceList);
