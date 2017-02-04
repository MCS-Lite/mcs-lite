import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Heading } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

const Container = styled.div`
  height: 1200px;
  background-color: ${props => props.theme.color.grayLight}
`;

const Device = props =>
  <Container>
    <Heading>Device page</Heading>

    <pre>
      {JSON.stringify(props.devices, null, 2)}
    </pre>
    <Button onClick={props.fetchDevices}>fetch</Button>
  </Container>;

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(Device);
