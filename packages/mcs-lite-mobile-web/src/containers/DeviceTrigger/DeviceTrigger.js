import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import IconChevronRight from 'mcs-lite-icon/lib/IconChevronRight';
import { PreventDrag, PullToRefresh, P } from 'mcs-lite-ui';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import { Item, StyledSamll, IconWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceTrigger extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.fetch();
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { device, isLoading, getMessages: t } = this.props;
    const { fetch } = this;

    return (
      <div>
        <Helmet title={t('triggerAndAction')} />
        <Header title={t('triggerAndAction')} backTo={updatePathname(`/devices/${device && device.deviceId}`)} />
        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetch}>
            <PreventDrag>
              <StyledLink to={updatePathname(`/devices/${device && device.deviceId}/trigger/edit`)}>
                <Item>
                  <div>
                    <P>觸發條件名稱 A</P>
                    <StyledSamll>{t('on')}</StyledSamll>
                  </div>
                  <IconWrapper><IconChevronRight /></IconWrapper>
                </Item>
              </StyledLink>

              <StyledLink to={updatePathname(`/devices/${device && device.deviceId}/trigger/edit`)}>
                <Item>
                  <div>
                    <P>觸發條件名稱 A</P>
                    <StyledSamll>{t('off')}</StyledSamll>
                  </div>
                  <IconWrapper><IconChevronRight /></IconWrapper>
                </Item>
              </StyledLink>
            </PreventDrag>
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
  withGetMessages(messages, 'DeviceTrigger'),
)(DeviceTrigger);
