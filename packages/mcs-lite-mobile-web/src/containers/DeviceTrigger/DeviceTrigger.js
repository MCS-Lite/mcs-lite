import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import IconChevronRight from 'mcs-lite-icon/lib/IconChevronRight';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { PreventDrag, PullToRefresh, P, MobileHeader } from 'mcs-lite-ui';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Item, StyledSamll, IconWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceTrigger extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
  };
  static defaultProps = {
    device: {},
  };
  componentWillMount = () => this.fetch();
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { device, isLoading, getMessages: t } = this.props;
    const { fetch } = this;

    return (
      <div>
        <Helmet><title>{t('triggerAndAction')}</title></Helmet>
        <MobileHeader.MobileHeader
          title={t('triggerAndAction')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${device.deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />
        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetch}>
            <PreventDrag>
              <StyledLink
                to={updatePathname(`/devices/${device.deviceId}/trigger/edit`)}
              >
                <Item>
                  <div>
                    <P>觸發條件名稱 A</P>
                    <StyledSamll>{t('on')}</StyledSamll>
                  </div>
                  <IconWrapper><IconChevronRight /></IconWrapper>
                </Item>
              </StyledLink>

              <StyledLink
                to={updatePathname(`/devices/${device.deviceId}/trigger/edit`)}
              >
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

export default DeviceTrigger;
