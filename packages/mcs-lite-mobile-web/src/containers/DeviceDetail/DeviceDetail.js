import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { PullToRefresh, Overlay, Menu, DataChannelCard, DataChannelAdapter } from 'mcs-lite-ui';
import dataChannels from 'mcs-lite-ui/lib/DataChannelAdapter/API';
import IconMoreVert from 'mcs-lite-icon/lib/IconMoreVert';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import Header from '../../components/Header';
import HeaderIcon from '../../components/HeaderIcon';
import StyledLink from '../../components/StyledLink';
import { Container, StyledImg, CardWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceDetail extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.fetch();
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
        <Header title="範例 A 的測試裝置" backTo={updatePathname('/devices')}>
          <HeaderIcon ref={getTarget} onClick={onMoreDetailClick}>
            <IconMoreVert />
          </HeaderIcon>
          {
            isMenuShow && (
              <Overlay
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
            )
          }
        </Header>
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

export default compose(
  connect(
    ({ devices, ui }, { params: { deviceId }}) => ({
      deviceId,
      device: devices[deviceId],
      isLoading: ui.isLoading,
    }),
    { fetchDeviceDetail: actions.fetchDeviceDetail },
  ),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
