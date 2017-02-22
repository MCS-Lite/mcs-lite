import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { MobileHeader, DataChannelCard, DataChannelAdapter } from 'mcs-lite-ui';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconCalendar from 'mcs-lite-icon/lib/IconCalendar';
import { Link } from 'react-router';
import { Container } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceDataChannelDetail extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
  }
  static defaultProps = {
    device: {
      user: {},
      prototype: {},
    },
  }
  componentWillMount = () => this.fetch();
  eventHandler = console.log; // eslint-disable-line
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { device, isLoading, getMessages: t, dataChannelId } = this.props;
    const { fetch, onHide, onSubmit, eventHandler, onStartTimeClick, onEndTimeClick } = this;

    return (
      <div>
        <Helmet title={'資料通道名稱'} />
        <MobileHeader.MobileHeader
          title={'資料通道名稱'}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${device.deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
          rightChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${device.deviceId}/dataChannels/${dataChannelId}/timeRange`)}
            >
              <IconCalendar />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <main>
          <Container>
            <DataChannelCard
              title="Title"
              subtitle="Last data point time : 2015-06-12 12:00"
            >
              <DataChannelAdapter
                dataChannelProps={{
                  id: dataChannelId,
                  type: 'SWITCH_CONTROL',
                  values: { value: 0 },
                  format: {},
                }}
                eventHandler={eventHandler}
              />
            </DataChannelCard>
          </Container>
        </main>
      </div>
    );
  }
}

export default DeviceDataChannelDetail;
