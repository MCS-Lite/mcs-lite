import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Transition from 'react-motion-ui-pack';
import { P, InputGroup, Button, Input } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import FixedFooter from '../../components/FixedFooter';
import { Item, Body, StyledSamll, ButtonWrapper, ScaledSwitch, StyledHr } from './styled-components';

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
        <Helmet title="編輯觸發條件與動作" />
        <Header title="編輯觸發條件與動作" backTo={`/devices/${device && device.deviceId}/trigger`} />
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
