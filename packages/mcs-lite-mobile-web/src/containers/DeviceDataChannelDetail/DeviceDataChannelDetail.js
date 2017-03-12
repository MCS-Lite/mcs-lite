import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconCalendar from 'mcs-lite-icon/lib/IconCalendar';
import IconRefresh from 'mcs-lite-icon/lib/IconRefresh';
import {
  MobileHeader, DataChannelCard, DataChannelAdapter, P, DataPointAreaChart,
} from 'mcs-lite-ui';
import {
  CardContainer, StyledSamll, HistoryHeader, ResetWrapper, HistoryContainer,
  ChartWrapper,
} from './styled-components';
import updatePathname from '../../utils/updatePathname';
import dataChannelTypeMapper from '../../utils/dataChannelTypeMapper';
import datetimeFormat from '../../utils/datetimeFormat';
import areaChartTypeMapper from '../../utils/areaChartTypeMapper';

class DeviceDataChannelDetail extends React.Component {
  static propTypes = {
    // React-router Params
    deviceId: PropTypes.string.isRequired,
    dataChannelId: PropTypes.string.isRequired,

    // Redux State
    datachannel: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.shape({
      updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,

    // Redux Action
    fetchDeviceDetail: PropTypes.func.isRequired,
    fetchDatapoints: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    setDatapoint: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,

    // WebSocket
    sendMessage: PropTypes.func,
  }
  componentWillMount = () => {
    const { deviceId, dataChannelId, fetchDeviceDetail, fetchDatapoints } = this.props;
    fetchDeviceDetail(deviceId);
    fetchDatapoints(deviceId, dataChannelId);
  };
  onResetClick = () => {
    const { dataChannelId, setQuery } = this.props;
    setQuery(dataChannelId, {});
  }
  eventHandler = (e) => {
    const { id, values, type } = e;
    const { deviceId, sendMessage, setDatapoint } = this.props;
    // TODO: refactor these codes.
    const datapoint = { datachannelId: id, values };
    switch (type) {
      case 'SUBMIT':
        // Remind: MUST upload the datapoint via WebSocket.
        sendMessage(JSON.stringify(datapoint));
        break;
      default:
        // Remind: Just change the state.
        setDatapoint(deviceId, datapoint);
        break;
    }
  }
  render() {
    const { deviceId, datachannel, data, getMessages: t, dataChannelId } = this.props;
    const { eventHandler, onResetClick } = this;

    return (
      <div>
        <Helmet title={t('dataChannelDetail')} />
        <MobileHeader.MobileHeader
          title={t('dataChannelDetail')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
          rightChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${deviceId}/dataChannels/${dataChannelId}/timeRange`)}
            >
              <IconCalendar />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <main>
          <CardContainer>
            {datachannel && (
              <DataChannelCard
                key={datachannel.datachannelId}
                title={datachannel.datachannelName}
                subtitle={datetimeFormat(new Date(datachannel.createdAt))}
              >
                <DataChannelAdapter
                  dataChannelProps={{
                    id: datachannel.datachannelId,
                    type: dataChannelTypeMapper(datachannel.channelType.name, datachannel.type),
                    values: datachannel.datapoints.values,
                    format: datachannel.format,
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
              {data.length > 0 ? (
                <DataPointAreaChart
                  data={data}
                  type={areaChartTypeMapper(datachannel.channelType.name)}
                />
              ) : t('noData')}
            </ChartWrapper>
          </HistoryContainer>
        </main>
      </div>
    );
  }
}

export default DeviceDataChannelDetail;
