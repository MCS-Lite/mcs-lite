import React, { PropTypes } from 'react';
import R from 'ramda';
import Helmet from 'react-helmet';
import {
  PullToRefresh, Overlay, DataChannelCard, DataChannelAdapter,
  MobileHeader,
} from 'mcs-lite-ui';
import Menu from 'mcs-lite-ui/lib/Menu';
import IconMoreVert from 'mcs-lite-icon/lib/IconMoreVert';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Container, StyledImg, CardWrapper, CardHeaderIcon } from './styled-components';
import updatePathname from '../../utils/updatePathname';

// (String, 1) => STRING_CONTROL
const typeMapper = (name, type) => R.pipe(
  R.cond([
    [R.equals(1), R.always('_CONTROL')],
    [R.equals(2), R.always('_DISPLAY')],
  ]),
  R.concat(R.toUpper(name)),
)(type);

class DeviceDetail extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }
  static defaultProps = {
    device: {},
  }
  state = { isMenuShow: false, target: undefined };
  componentWillMount = () => this.fetch();
  onMoreDetailClick = () => this.setState({ isMenuShow: !this.state.isMenuShow });
  onHide = () => this.setState({ isMenuShow: false });
  getTarget = node => this.setState({ target: node });
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  eventHandler = (e) => {
    this.props.sendMessage(JSON.stringify(e));
  }
  render() {
    const { isMenuShow, target } = this.state;
    const { device, isLoading, getMessages: t } = this.props;
    const { getTarget, onMoreDetailClick, onHide, fetch, eventHandler } = this;
    return (
      <div>
        <Helmet title="範例 A 的測試裝置" />
        <MobileHeader.MobileHeader
          title="範例 A 的測試裝置"
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
                  <StyledLink to={updatePathname(`/devices/${device.deviceId}/info`)}>
                    <Menu.MenuItem>{t('deviceIntro')}</Menu.MenuItem>
                  </StyledLink>
                  <StyledLink to={updatePathname(`/devices/${device.deviceId}/trigger`)}>
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
                    (device.datachannels || []).map(c => (
                      <DataChannelCard
                        key={c.datachannelId}
                        data-width="half"
                        header={
                          <StyledLink to={updatePathname(`/devices/${device.deviceId}/dataChannels/${c.datachannelId}`)}>
                            <CardHeaderIcon>
                              <IconFold />
                            </CardHeaderIcon>
                          </StyledLink>
                        }
                        title={c.datachannelName}
                        subtitle={new Date(c.createdAt).toString()}
                      >
                        <DataChannelAdapter
                          dataChannelProps={{
                            id: c.datachannelId,
                            type: typeMapper(c.channelType.name, c.type),
                            values: { value: 0 },
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
