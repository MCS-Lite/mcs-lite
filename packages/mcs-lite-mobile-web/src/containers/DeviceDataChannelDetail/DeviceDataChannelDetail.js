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

class DeviceDataChannelDetail extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    datapoints: PropTypes.array,
    deviceId: PropTypes.string.isRequired,
    dataChannelId: PropTypes.string.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
    fetchDatapoints: PropTypes.func.isRequired,
  }
  static defaultProps = {
    device: {
      user: {},
      prototype: {},
    },
    datapoints: [],
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
  fetch = () => {
    const { deviceId, dataChannelId } = this.props;

    this.props.fetchDeviceDetail(deviceId);
    this.props.fetchDatapoints(deviceId, dataChannelId);
  }
  render() {
    const { device, datapoints, getMessages: t, dataChannelId } = this.props;
    const { eventHandler, onResetClick } = this;
    const data = datapoints.map(d => ({
      value: parseInt(d.values.value, 10),
      updatedAt: datetimeFormat(new Date(d.updatedAt)),
    }));
    const c = (device.datachannels || []).filter(e => e.datachannelId === dataChannelId)[0];

    return (
      <div>
        <Helmet title={t('dataChannelDetail')} />
        <MobileHeader.MobileHeader
          title={t('dataChannelDetail')}
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
            {c && (
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
              {c && (
                <DataPointAreaChart
                  data={data}
                  type={['Switch'].includes(c.channelType.name) ? 'step' : 'linear'}
                />
              )}
            </ChartWrapper>
          </HistoryContainer>
        </main>
      </div>
    );
  }
}

export default DeviceDataChannelDetail;
