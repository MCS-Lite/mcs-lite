import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Img, PullToRefresh, DataChannel, Overlay, Menu } from 'mcs-lite-ui';
import IconEllipsisV from 'mcs-lite-icon/lib/IconEllipsisV';
import { actions } from '../../modules/devices';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header from '../../components/Header';
import HeaderIcon from '../../components/HeaderIcon';
import StyledLink from '../../components/StyledLink';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 4px;
`;

const StyledImg = styled(Img)`
  height: 192px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    height: 221px;
    padding: 8px 16px;
    margin: 4px;
    flex-basis: 100%;
  }

  > [data-width ~= half] {
    flex-grow: 1;
    flex-basis: 40%;
  }
`;

class DeviceDetail extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.props.fetchDeviceDetail();
  onMoreDetailClick = () => this.setState({ isMenuShow: !this.state.isMenuShow });
  onHide = () => this.setState({ isMenuShow: false });
  onRefresh = done => this.props.fetchDeviceDetail(done);
  getTarget = node => this.setState({ target: node });
  render() {
    const { isMenuShow, target } = this.state;
    const { device } = this.props;
    const { getTarget, onMoreDetailClick, onHide, onRefresh } = this;
    return (
      <div>
        <Header title="裝置名稱（裝置詳細資料" backTo="/devices">
          <HeaderIcon ref={getTarget} onClick={onMoreDetailClick}>
            <IconEllipsisV />
          </HeaderIcon>
          {
            isMenuShow && (
              <Overlay
                target={target}
                onClickOutSide={onHide}
                alignConfig={{ points: ['tr', 'bc'], offset: [20, -20]}}
              >
                <Menu.Menu key="menu">
                  <StyledLink to={`/devices/${device.deviceId}/info`}>
                    <Menu.MenuItem>測試裝置介紹</Menu.MenuItem>
                  </StyledLink>
                  <Menu.MenuItem>觸發條件與動作</Menu.MenuItem>
                </Menu.Menu>
              </Overlay>
            )
          }
        </Header>
        <main>
          <PullToRefresh onRefresh={onRefresh}>
            <div>
              <StyledImg src="https://img.mediatek.com/600/mtk.linkit/productBanner.png" />

              <Container>
                <CardWrapper>
                  <DataChannel.ControlSwitch
                    data-width="half"
                    title="Title"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                  />

                  <DataChannel.ControlNumber
                    data-width="half"
                    title="Title"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                  />

                  <DataChannel.ControlRange
                    title="Title"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      labels: ['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'],
                    }}
                  />

                  <DataChannel.ControlString
                    data-width="half"
                    title="Title"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                  />
                </CardWrapper>
              </Container>
            </div>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ devices }, { params: { deviceId }}) => ({
    device: devices[deviceId],
  }),
  { fetchDeviceDetail: actions.fetchDeviceDetail },
)(DeviceDetail);
