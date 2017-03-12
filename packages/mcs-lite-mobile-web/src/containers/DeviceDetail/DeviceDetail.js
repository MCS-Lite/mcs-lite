import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  PullToRefresh, Overlay, Menu, DataChannelCard, DataChannelAdapter,
  MobileHeader,
} from 'mcs-lite-ui';
import IconMoreVert from 'mcs-lite-icon/lib/IconMoreVert';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Container, StyledImg, CardWrapper, CardHeaderIcon } from './styled-components';
import updatePathname from '../../utils/updatePathname';
import dataChannelTypeMapper from '../../utils/dataChannelTypeMapper';
import datetimeFormat from '../../utils/datetimeFormat';

class DeviceDetail extends React.Component {
  static propTypes = {
    // React-router Params
    deviceId: PropTypes.string.isRequired,

    // Redux State
    device: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,

    // Redux Action
    fetchDeviceDetail: PropTypes.func.isRequired,
    setDatapoint: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,

    // WebSocket
    sendMessage: PropTypes.func.isRequired,
  }
  state = { isMenuShow: false, target: undefined };
  componentWillMount = () => this.fetch();
  onMoreDetailClick = () => this.setState({ isMenuShow: !this.state.isMenuShow });
  onHide = () => this.setState({ isMenuShow: false });
  getTarget = node => this.setState({ target: node });
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
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
    const { isMenuShow, target } = this.state;
    const { deviceId, device, isLoading, getMessages: t } = this.props;
    const { getTarget, onMoreDetailClick, onHide, fetch, eventHandler } = this;
    return (
      <div>
        <Helmet title={device.deviceName} />
        <MobileHeader.MobileHeader
          title={device.deviceName}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname('/devices')}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
          rightChildren={[
            <MobileHeader.MobileHeaderIcon
              key="icon"
              ref={getTarget}
              component={Link}
              onClick={onMoreDetailClick}
            >
              <IconMoreVert />
            </MobileHeader.MobileHeaderIcon>,
            isMenuShow && (
              <Overlay
                key="menu"
                target={target}
                onClickOutSide={onHide}
                alignConfig={{ points: ['tr', 'bc'], offset: [20, -20]}}
              >
                <Menu.Menu key="menu">
                  <StyledLink to={updatePathname(`/devices/${deviceId}/info`)}>
                    <Menu.MenuItem>{t('deviceIntro')}</Menu.MenuItem>
                  </StyledLink>
                  <StyledLink to={updatePathname(`/devices/${deviceId}/trigger`)}>
                    <Menu.MenuItem>{t('triggerAndAction')}</Menu.MenuItem>
                  </StyledLink>
                </Menu.Menu>
              </Overlay>
            ),
          ]}
        />

        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetch}>
            <div>
              <StyledImg src="https://img.mediatek.com/600/mtk.linkit/productBanner.png" />

              <Container>
                <CardWrapper>
                  {
                    device.datachannels && device.datachannels.map(c => (
                      <DataChannelCard
                        key={c.datachannelId}
                        data-width="half"
                        header={
                          <StyledLink to={updatePathname(`/devices/${deviceId}/dataChannels/${c.datachannelId}`)}>
                            <CardHeaderIcon>
                              <IconFold />
                            </CardHeaderIcon>
                          </StyledLink>
                        }
                        title={c.datachannelName}
                        subtitle={datetimeFormat(new Date(c.createdAt))}
                      >
                        <DataChannelAdapter
                          dataChannelProps={{
                            id: c.datachannelId,
                            type: dataChannelTypeMapper(c.channelType.name, c.type),
                            values: c.datapoints.values,
                            format: c.format,
                          }}
                          eventHandler={eventHandler}
                        />
                      </DataChannelCard>
                    ))
                  }
                </CardWrapper>
              </Container>
            </div>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default DeviceDetail;
