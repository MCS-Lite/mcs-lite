import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { PullToRefresh, B, P, MobileHeader } from 'mcs-lite-ui';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { Link } from 'react-router';
import { Container } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceDetailInfo extends React.Component {
  static propTypes = {
    device: PropTypes.object,
    deviceId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
  }
  static defaultProps = {
    device: {
      user: {},
      prototype: {},
    },
  }
  componentWillMount = () => this.fetch();
  fetch = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { device, isLoading, getMessages: t } = this.props;
    const { fetch } = this;

    return (
      <div>
        <Helmet title={t('deviceIntro')} />
        <MobileHeader.MobileHeader
          title={t('deviceIntro')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${device.deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />
      </div>
    );
  }
}

export default DeviceDetailInfo;
