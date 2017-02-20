import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { PullToRefresh, B, P, MobileHeader } from 'mcs-lite-ui';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { Link } from 'react-router';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import { Container } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class DeviceDetailInfo extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.fetch();
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
              to={updatePathname(`/devices/${device && device.deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetch}>
            <Container>
              <div>
                <B>裝置名稱</B>
                <P>範例 A 的測試裝置</P>
              </div>
              <div>
                <B>創建者</B>
                <P>Jean Schmidt</P>
              </div>
              <div>
                <B>版本</B>
                <P>1.0</P>
              </div>
              <div>
                <B>描述</B>
                <P>
                  範例 A 的測試裝置是從範例 A 產品原型所創建出的，學生可以利用此測試
                  裝置來操控實體、查看資料收集狀況。而這裡會顯示此測試裝置的敘述文字，
                  最多不超過四行，超過的話，需要以點點點來限制文字長度，如果要看到過長敘述，
                  需進到測試裝置的詳情頁面查看。
                </P>
              </div>
              <div>
                <B>DeviceId</B>
                <P>D0l2SYP0</P>
              </div>
              <div>
                <B>DeviceKey</B>
                <P>6lCmeODj3v0TlXWq</P>
              </div>
            </Container>
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
  withGetMessages(messages, 'DeviceDetailInfo'),
)(DeviceDetailInfo);
