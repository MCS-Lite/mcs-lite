import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Heading, PullToRefresh, PreventDrag } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 8px;
`;

const CardWrapper = styled.div`

  > * {
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const DeviceList = (props) => {
  const onRefresh = (done) => {
    props.fetchDevices(done);
  };
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Container>
        <Heading>DeviceList page</Heading>

        <CardWrapper>
          {
            props.devices.map(device => (
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
