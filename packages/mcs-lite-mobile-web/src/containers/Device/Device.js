import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

const Device = props =>
  <div>
    Device page
    <pre>
      {JSON.stringify(props.devices, null, 2)}
    </pre>
    <Button onClick={props.fetchDevices}>fetch</Button>
  </div>;

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(Device);
