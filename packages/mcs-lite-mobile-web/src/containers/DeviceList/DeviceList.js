import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Heading, PullToRefresh, PreventDrag } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';

const CardContainer = styled.div`

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
      <div>
        <Heading>DeviceList page</Heading>

        <CardContainer>
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
        </CardContainer>
      </div>
    </PullToRefresh>
  );
};

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceList);
