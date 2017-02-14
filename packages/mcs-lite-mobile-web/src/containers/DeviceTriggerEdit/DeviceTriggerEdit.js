import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Transition from 'react-motion-ui-pack';
import { P, InputGroup, Button, Input } from 'mcs-lite-ui';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import FixedFooter from '../../components/FixedFooter';
import { Item, Body, StyledSamll, ButtonWrapper, ScaledSwitch, StyledHr } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceTriggerEdit extends React.Component {
  state = { isChecked: false };
  componentDidMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  onSwitchClick = () => this.setState({ isChecked: !this.state.isChecked });
  onSubmit = e => e.preventDefault();
  render() {
    const { isChecked } = this.state;
    const { device, getMessages: t } = this.props;
    const { onSwitchClick, onSubmit } = this;

    return (
      <div>
        <Helmet title={t('editTriggerAndAction')} />
        <Header title={t('editTriggerAndAction')} backTo={updatePathname(`/devices/${device && device.deviceId}/trigger`)} />
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
                  <StyledSamll>{t('unit')}單位顯示</StyledSamll>

                  <InputGroup>
                    <Button>{t('greater')}</Button>
                    <Input placeholder="預設值：20" />
                  </InputGroup>

                  <StyledHr>{t('and')}</StyledHr>
                </div>

                <div key="2">
                  <P>資料通道名稱 B</P>
                  <StyledSamll>{t('unit')}單位顯示</StyledSamll>

                  <InputGroup>
                    <Button>{t('between')}</Button>
                    <Input placeholder="預設值：0" />
                    <Button>{t('and')}</Button>
                    <Input placeholder="預設值：100" />
                  </InputGroup>
                </div>
              </Transition>
            }

            {isChecked &&
              <FixedFooter>
                <ButtonWrapper>
                  <StyledLink to={updatePathname('/account')}>
                    <Button kind="default" block>{t('cancel')}</Button>
                  </StyledLink>
                  <Button component="input" type="submit" value={t('save')} block />
                </ButtonWrapper>
              </FixedFooter>
            }
          </form>
        </main>
      </div>
    );
  }
}

export default compose(
  connect(
    ({ devices }, { params: { deviceId }}) => ({
      deviceId,
      device: devices[deviceId],
    }),
    { fetchDeviceDetail: actions.fetchDeviceDetail },
  ),
  withGetMessages(messages, 'DeviceTriggerEdit'),
)(DeviceTriggerEdit);
