import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import IconAngleRight from 'mcs-lite-icon/lib/IconAngleRight';
import { PreventDrag, PullToRefresh, P, Small } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';

const Item = styled(MaxWidthCenterWrapper)`
  padding: 8px 16px;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.color.grayBase};
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${props => props.theme.color.primary};
`;

class DeviceTrigger extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.props.fetchDeviceDetail();
  render() {
    const { device, isLoading, fetchDeviceDetail } = this.props;

    return (
      <div>
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
