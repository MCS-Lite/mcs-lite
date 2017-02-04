import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Heading, PullToRefresh } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

const Container = styled.section`
  height: 1200px;
  background-color: ${props => props.theme.color.grayLight}
`;

const Device = props =>
  <PullToRefresh>
    <Container>
      <Heading>Device page</Heading>

      <pre>
        {JSON.stringify(props.devices, null, 2)}
      </pre>
      <Button onClick={props.fetchDevices}>fetch</Button>
    </Container>
  </PullToRefresh>;

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(Device);
