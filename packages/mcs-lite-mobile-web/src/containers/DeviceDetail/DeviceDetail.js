// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import IconMoreVert from 'mcs-lite-icon/lib/IconMoreVert';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import { Link } from 'react-router';
import PullToRefresh from 'mcs-lite-ui/lib/PullToRefresh';
import Overlay from 'mcs-lite-ui/lib/Overlay';
import Menu from 'mcs-lite-ui/lib/Menu';
import DataChannelCard from 'mcs-lite-ui/lib/DataChannelCard';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';
import MobileHeader from 'mcs-lite-ui/lib/MobileHeader';
import {
  Container,
  StyledImg,
  CardWrapper,
  CardHeaderIcon,
} from './styled-components';
import StyledLink from '../../components/StyledLink';
import WebSocketNotification from '../../components/WebSocketNotification';
import { updatePathname } from '../../utils/routerHelper';
import dataChannelTypeMapper from '../../utils/dataChannelTypeMapper';
import localTimeFormat from '../../utils/localTimeFormat';
import resolveImage from '../../utils/resolveImage';
import BANNER_IMAGE from '../../statics/images/banner.svg';

type DCEvent = {
  id: string,
  values: {
    value?: string | number,
    period?: number,
  },
  type: 'SUBMIT' | 'CHANGE' | 'CLEAR',
};
type DCEventHandler = DCEvent => void;

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
    reconnect: PropTypes.func.isRequired,
    isWebSocketClose: PropTypes.bool.isRequired,
  };
  state = { isMenuShow: false, target: undefined };
  componentWillMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  onMoreDetailClick = () =>
    this.setState({ isMenuShow: !this.state.isMenuShow });
  onHide = () => this.setState({ isMenuShow: false });
  getTarget = (node: any) => this.setState({ target: node });
  reFetch = () => this.props.fetchDeviceDetail(this.props.deviceId, true);
  eventHandler: DCEventHandler = e => {
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
  };
  render() {
    const { isMenuShow, target } = this.state;
    const {
      deviceId,
      device,
      isLoading,
      getMessages: t,
      isWebSocketClose,
      reconnect,
    } = this.props;
    const {
      getTarget,
      onMoreDetailClick,
      onHide,
      reFetch,
      eventHandler,
    } = this;
    return (
      <div>
        <Helmet><title>{device.deviceName}</title></Helmet>
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
            isMenuShow &&
              <Overlay
                key="menu"
                target={target}
                onClickOutSide={onHide}
                alignConfig={{ points: ['tr', 'bc'], offset: [20, -20] }}
                transitionConfig={{
                  component: false,
                  enter: {
                    translateY: 0,
                  },
                  leave: {
                    translateY: -10,
                  },
                }}
              >
                <Menu.Menu key="menu">
                  <StyledLink to={updatePathname(`/devices/${deviceId}/info`)}>
                    <Menu.MenuItem>{t('deviceIntro')}</Menu.MenuItem>
                  </StyledLink>

                  {/* TODO: Hide trigger feature at Phase 1
                  <StyledLink to={updatePathname(`/devices/${deviceId}/trigger`)}>
                    <Menu.MenuItem>{t('triggerAndAction')}</Menu.MenuItem>
                  </StyledLink>
                  */}
                </Menu.Menu>
              </Overlay>,
          ]}
        />

        <main>
          {isWebSocketClose && <WebSocketNotification onClick={reconnect} />}

          <PullToRefresh isLoading={isLoading} onPull={reFetch}>
            <div>
              <StyledImg
                src={resolveImage(BANNER_IMAGE, device.deviceImageURL)}
              />

              <Container>
                <CardWrapper>
                  {device.datachannels &&
                    device.datachannels.map(c =>
                      <DataChannelCard
                        key={c.datachannelId}
                        data-width="half"
                        header={
                          <StyledLink
                            to={updatePathname(
                              `/devices/${deviceId}/dataChannels/${c.datachannelId}`,
                            )}
                          >
                            <CardHeaderIcon>
                              <IconFold />
                            </CardHeaderIcon>
                          </StyledLink>
                        }
                        title={c.datachannelName}
                        subtitle={localTimeFormat(c.createdAt)}
                      >
                        <DataChannelAdapter
                          dataChannelProps={{
                            id: c.datachannelId,
                            type: dataChannelTypeMapper(
                              c.channelType.name,
                              c.type,
                            ),
                            values: c.datapoints.values,
                            format: c.format,
                          }}
                          eventHandler={eventHandler}
                        />
                      </DataChannelCard>,
                    )}
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
