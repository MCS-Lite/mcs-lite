import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  MobileHeader, DataChannelCard, DataChannelAdapter, P, DataPointAreaChart,
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
import dataChannelTypeMapper from '../../utils/dataChannelTypeMapper';
import datetimeFormat from '../../utils/datetimeFormat';

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
  onResetClick = console.log; // eslint-disable-line
  eventHandler = (e) => {
    // TODO: refactor these codes.
    const datapoint = { datachannelId: e.id, values: e.values };
    switch (e.type) {
      case 'submit':
        // Remind: MUST upload the datapoint via WebSocket.
        this.props.sendMessage(JSON.stringify(datapoint));
        break;
      default:
        // Remind: Just change the state.
        this.props.setDatapoint(this.props.deviceId, datapoint);
    }
  }
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
            {(device.datachannels || [])
              .filter(e => e.datachannelId === dataChannelId)
              .map(c => (
                <DataChannelCard
                  key={c.datachannelId}
                  title={c.datachannelName}
                  subtitle={datetimeFormat(new Date(c.createdAt))}
                >
                  <DataChannelAdapter
                    dataChannelProps={{
                      id: c.datachannelId,
                      type: dataChannelTypeMapper(c.channelType.name, c.type),
                      values: c.datapoints.values || {},
                      format: c.format,
                    }}
                    eventHandler={eventHandler}
                  />
                </DataChannelCard>
              ),
            )}
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
              <DataPointAreaChart data={data1} />
            </ChartWrapper>
          </HistoryContainer>
        </main>
      </div>
    );
  }
}

export default DeviceDataChannelDetail;
