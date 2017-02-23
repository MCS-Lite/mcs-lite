import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  MobileHeader, DataChannelCard, DataChannelAdapter, P, DataPointlAreaChart,
} from 'mcs-lite-ui';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconCalendar from 'mcs-lite-icon/lib/IconCalendar';
import IconRefresh from 'mcs-lite-icon/lib/IconRefresh';
import { Link } from 'react-router';
import {
  CardContainer, StyledSamll, HistoryHeader, ResetWrapper, HistoryContainer,
  ChartWrapper,
} from './styled-components';
import updatePathname from '../../utils/updatePathname';

const data1 = [
  { value: 5, updatedAt: '12-13 00:00' },
  { value: 25, updatedAt: '12-13 00:01' },
  { value: 75, updatedAt: '12-13 00:02' },
  { value: 89, updatedAt: '12-13 00:03' },
  { value: 23, updatedAt: '12-13 00:04' },
  { value: 41, updatedAt: '12-13 00:05' },
  { value: 23, updatedAt: '12-13 00:06' },
];

class DeviceDataChannelDetail extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
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
  onResetClick = console.log; // eslint-disable-line
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { device, getMessages: t, dataChannelId } = this.props;
    const { eventHandler, onResetClick } = this;

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
          <CardContainer>
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
          </CardContainer>

          <HistoryContainer>
            <HistoryHeader>
              <div>
                <P>{t('historyChart')}</P>
                <StyledSamll>{t('defaultQueryLatest')}</StyledSamll>
              </div>
              <div>
                <ResetWrapper onClick={onResetClick}>
                  <IconRefresh />
                  <P>{t('reset')}</P>
                </ResetWrapper>
              </div>
            </HistoryHeader>

            <ChartWrapper>
              <DataPointlAreaChart data={data1} />
            </ChartWrapper>
          </HistoryContainer>
        </main>
      </div>
    );
  }
}

export default DeviceDataChannelDetail;
