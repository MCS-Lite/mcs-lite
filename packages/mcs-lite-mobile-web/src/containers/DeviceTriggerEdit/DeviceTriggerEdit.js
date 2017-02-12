import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Transition from 'react-motion-ui-pack';
import { Switch, Hr, P, Small, InputGroup, Button, Input } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import FixedFooter from '../../components/FixedFooter';

const Item = styled(MaxWidthCenterWrapper)`
  padding: 8px 16px;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled(MaxWidthCenterWrapper)`
  padding: 16px 16px 56px 16px;

  > * {
    margin-bottom: 16px;
  }
`;

const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  margin-bottom: 8px;
  color: ${props => props.theme.color.grayBase};
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px 16px;

  > * {
    flex: 1;
  }

  > *:first-child {
    margin-right: 8px;
  }
`;

const ScaledSwitch = styled(Switch)`
  transform: scale(0.48);
  transform-origin: right center;
`;

const StyledHr = styled(Hr)`
  margin-top: 16px;
`;

class DeviceTriggerEdit extends React.Component {
  state = { isChecked: false };
  componentDidMount = () => this.props.fetchDeviceDetail();
  onSwitchClick = () => this.setState({ isChecked: !this.state.isChecked });
  onSubmit = e => e.preventDefault();
  render() {
    const { isChecked } = this.state;
    const { device } = this.props;
    const { onSwitchClick, onSubmit } = this;

    return (
      <div>
        <Header title="觸發條件與動作" backTo={`/devices/${device && device.deviceId}/trigger`} />
        <main>
          <Item>
            <P>觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A</P>
            <div>
              <ScaledSwitch kind="primary" checked={isChecked} onClick={onSwitchClick} />
            </div>
          </Item>

          <form onSubmit={onSubmit}>
            {isChecked &&
              <Transition
                component={Body}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ opacity: 0.8, translateY: -20 }}
              >
                <div key="1">
                  <P>資料通道名稱 A</P>
                  <StyledSamll>單位：單位顯示</StyledSamll>

                  <InputGroup>
                    <Button>大於</Button>
                    <Input placeholder="預設值：20" />
                  </InputGroup>

                  <StyledHr>和</StyledHr>
                </div>

                <div key="2">
                  <P>資料通道名稱 B</P>
                  <StyledSamll>單位：單位顯示</StyledSamll>

                  <InputGroup>
                    <Button>之間</Button>
                    <Input placeholder="預設值：0" />
                    <Button>和</Button>
                    <Input placeholder="預設值：100" />
                  </InputGroup>
                </div>
              </Transition>
            }

            {isChecked &&
              <FixedFooter>
                <ButtonWrapper>
                  <StyledLink to="/account">
                    <Button kind="default" block>取消</Button>
                  </StyledLink>
                  <Button component="input" type="submit" value="儲存" block />
                </ButtonWrapper>
              </FixedFooter>
            }
          </form>
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
)(DeviceTriggerEdit);
