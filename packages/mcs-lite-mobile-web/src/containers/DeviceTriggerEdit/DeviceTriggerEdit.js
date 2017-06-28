import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Transition from 'react-motion-ui-pack';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import P from 'mcs-lite-ui/lib/P';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import Button from 'mcs-lite-ui/lib/Button';
import Input from 'mcs-lite-ui/lib/Input';
import MobileFixedFooter from 'mcs-lite-ui/lib/MobileFixedFooter';
import MobileHeader from 'mcs-lite-ui/lib/MobileHeader';
import { updatePathname } from 'mcs-lite-ui/lib/utils/routerHelper';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import {
  Item,
  Body,
  StyledSamll,
  ButtonWrapper,
  ScaledSwitch,
  StyledHr,
} from './styled-components';

class DeviceTriggerEdit extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
  };
  static defaultProps = {
    device: {},
  };
  state = { isChecked: false };
  componentWillMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  onSwitchClick = () => this.setState({ isChecked: !this.state.isChecked });
  onSubmit = e => e.preventDefault();
  render() {
    const { isChecked } = this.state;
    const { device, getMessages: t } = this.props;
    const { onSwitchClick, onSubmit } = this;

    return (
      <div>
        <Helmet><title>{t('editTriggerAndAction')}</title></Helmet>
        <MobileHeader.MobileHeader
          title={t('editTriggerAndAction')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${device.deviceId}/trigger`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />
        <main>
          <Item>
            <P>觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A觸發條件名稱 A</P>
            <div>
              <ScaledSwitch
                kind="primary"
                checked={isChecked}
                onClick={onSwitchClick}
              />
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
              </Transition>}

            {isChecked &&
              <MobileFixedFooter>
                <ButtonWrapper>
                  <StyledLink to={updatePathname('/account')}>
                    <Button kind="default" block>{t('cancel')}</Button>
                  </StyledLink>
                  <Button
                    component="input"
                    type="submit"
                    value={t('save')}
                    block
                  />
                </ButtonWrapper>
              </MobileFixedFooter>}
          </form>
        </main>
      </div>
    );
  }
}

export default DeviceTriggerEdit;
