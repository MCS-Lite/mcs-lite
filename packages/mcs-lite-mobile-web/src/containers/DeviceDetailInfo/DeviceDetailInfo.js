import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PullToRefresh, B, P } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header from '../../components/Header';

const Container = styled(MaxWidthCenterWrapper)`

  > div + div {
    margin-top: 8px;
  }
`;

class DeviceDetailInfo extends React.Component {
  state = { isMenuShow: false, target: undefined };
  componentDidMount = () => this.props.fetchDeviceDetail();
  onRefresh = done => this.props.fetchDeviceDetail(done);
  render() {
    const { device } = this.props;
    const { onRefresh } = this;

    return (
      <div>
        <Header title="裝置名稱（裝置詳細資料" backTo={`/devices/${device && device.deviceId}`} />
        <main>
          <PullToRefresh onRefresh={onRefresh}>
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

export default connect(
  ({ devices }, { params: { deviceId }}) => ({
    device: devices[deviceId],
  }),
  { fetchDeviceDetail: actions.fetchDeviceDetail },
)(DeviceDetailInfo);
