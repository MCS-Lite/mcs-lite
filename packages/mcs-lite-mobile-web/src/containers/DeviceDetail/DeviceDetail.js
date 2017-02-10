import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Img, PullToRefresh, DataChannel, Overlay, Menu, P, Button, Input } from 'mcs-lite-ui';
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
    height: initial;
    height: initial;
    padding: 8px 16px;
    margin: 4px;
    flex-basis: 100%;
  }

  > [data-width ~= half] {
    flex-grow: 1;
    flex-basis: 40%;
  }
`;

const PWM = () => {
  const PWMContainer = styled.div`
    margin-bottom: 10px;
  `;

  const InputWrapper = styled.div`
    display: flex;
    margin-top: 5px;
  `;

  const StyledInput = styled(Input)`
    margin-right: 10px;
  `;

  return (
    <DataChannel.ControlRange
      title="ControlPWM"
      subtitle="123125125125125"
      header={<a href="">Link</a>}
      childrenProps={{
        children: (
          <PWMContainer>
            <label htmlFor="input"><P color="grayBase">Period</P></label>
            <InputWrapper>
              <StyledInput id="input" placeholder="Integer only" type="number" />
              <Button>OK</Button>
            </InputWrapper>
          </PWMContainer>
        ),
        labels: [0, 100],
      }}
    />
  );
};

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
                  <DataChannel.DisplayStatus
                    data-width="half"
                    title="DisplayStatus"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      labels: ['OFF', 'ON'],
                    }}
                  />

                  <DataChannel.DisplayMultipleValue
                    data-width="half"
                    title="DisplayStatus"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      items: [
                        { name: 'Value', value: 1234455 },
                        { name: 'Period', value: 125125 },
                      ],
                    }}
                  />

                  <DataChannel.DisplayStatus
                    data-width="half"
                    title="Category"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      value: 2,
                      labels: ['Apple1', 'Apple2', 'Pen', 'Pineapple', 'PPAPPPAPPPAP'],
                    }}
                  />

                  <DataChannel.DisplayUnitValue
                    data-width="half"
                    title="DisplayStatus"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      value: 1123124124121,
                      unit: '攝氏',
                    }}
                  />

                  <DataChannel.DisplayString
                    data-width="half"
                    title="DisplayString"
                    subtitle="123125125125125"
                    header={<a href="">Link</a>}
                    childrenProps={{
                      value: 'value',
                      placeholder: 'This place holds Hex value.',
                    }}
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

                  <PWM />

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
