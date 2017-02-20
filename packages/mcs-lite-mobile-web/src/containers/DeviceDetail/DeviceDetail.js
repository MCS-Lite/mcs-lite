import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  PullToRefresh, Overlay, Menu, DataChannelCard, DataChannelAdapter,
  MobileHeader,
} from 'mcs-lite-ui';
import dataChannels from 'mcs-lite-ui/lib/DataChannelAdapter/API';
import IconMoreVert from 'mcs-lite-icon/lib/IconMoreVert';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Container, StyledImg, CardWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceDetail extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
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
  eventHandler = e => console.log(e); // eslint-disable-line
  render() {
    const { isMenuShow, target } = this.state;
    const { device, isLoading, getMessages: t } = this.props;
    const { getTarget, onMoreDetailClick, onHide, fetch } = this;
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
                    dataChannels.map(c => (
                      <DataChannelCard
                        key={c.id}
                        data-width="half"
                        title="Title"
                        subtitle="Last data point time : 2015-06-12 12:00"
                        description="You can input description of controller here. You …"
                      >
                        <DataChannelAdapter
                          dataChannelProps={c}
                          eventHandler={this.eventHandler}
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
