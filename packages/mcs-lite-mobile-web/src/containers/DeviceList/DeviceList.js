import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { P, PullToRefresh, PreventDrag } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 16px;
`;

const CardWrapper = styled.div`

  > * {
    margin-bottom: 16px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const PlaceholdWrapper = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

const DeviceList = ({ devices, fetchDevices }) => {
  const onRefresh = done => fetchDevices(done);

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Container>
        {
          R.isEmpty(devices) &&
            <PlaceholdWrapper>
              目前還沒有任何測試裝置
            </PlaceholdWrapper>
        }
        <CardWrapper>
          {
            devices.map(device => (
              <PreventDrag key={device.id}>
                <StyledLink to={`/devices/${device.id}`}>
                  <DeviceCard
                    title={device.name}
                    image={device.image}
                  />
                </StyledLink>
              </PreventDrag>
            ))
          }
        </CardWrapper>
      </Container>
    </PullToRefresh>
  );
};

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceList);
