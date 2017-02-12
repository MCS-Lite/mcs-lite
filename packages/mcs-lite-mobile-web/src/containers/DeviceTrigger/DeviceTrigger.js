import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import IconAngleRight from 'mcs-lite-icon/lib/IconAngleRight';
import { PreventDrag, PullToRefresh, P } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import { Item, StyledSamll, IconWrapper } from './styled-components';

class DeviceTrigger extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.props.fetchDeviceDetail();
  render() {
    const { device, isLoading, fetchDeviceDetail } = this.props;

    return (
      <div>
        <Helmet title="觸發條件與動作" />
        <Header title="觸發條件與動作" backTo={`/devices/${device && device.deviceId}`} />
        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetchDeviceDetail}>
            <PreventDrag>
              <StyledLink to={`/devices/${device && device.deviceId}/trigger/edit`}>
                <Item>
                  <div>
                    <P>觸發條件名稱 A</P>
                    <StyledSamll>ON</StyledSamll>
                  </div>
                  <IconWrapper><IconAngleRight /></IconWrapper>
                </Item>
              </StyledLink>

              <StyledLink to={`/devices/${device && device.deviceId}/trigger/edit`}>
                <Item>
                  <div>
                    <P>觸發條件名稱 A</P>
                    <StyledSamll>ON</StyledSamll>
                  </div>
                  <IconWrapper><IconAngleRight /></IconWrapper>
                </Item>
              </StyledLink>
            </PreventDrag>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ devices, ui }, { params: { deviceId }}) => ({
    device: devices[deviceId],
    isLoading: ui.isLoading,
  }),
  { fetchDeviceDetail: actions.fetchDeviceDetail },
)(DeviceTrigger);
