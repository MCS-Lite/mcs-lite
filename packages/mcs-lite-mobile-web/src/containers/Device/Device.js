import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, PullToRefresh } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

const DeviceContainer = styled.div`
  height: 100%;
`;

const Device = (props) => {
  const onRefresh = (done) => {
    props.fetchDevices(done);
  };
  return (
    <DeviceContainer>
      <PullToRefresh onRefresh={onRefresh}>
        Device page
        <pre>
          {JSON.stringify(props.devices, null, 2)}
        </pre>
        {/* <Button onClick={props.fetchDevices}>fetch</Button> */}
      </PullToRefresh>
    </DeviceContainer>
  );
};

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(Device);
