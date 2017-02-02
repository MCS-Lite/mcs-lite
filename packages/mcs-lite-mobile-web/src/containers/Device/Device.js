import React from 'react';
import { connect } from 'react-redux';
import { Button, DataChannelCard, DataChannel } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

class Device extends React.Component {
  render() {
    return (
      <div>
        Device page
        <pre>
          {JSON.stringify(this.props.devices, null, 2)}
        </pre>
        <Button onClick={this.props.fetchDevices}>fetch</Button>
      </div>
    );
  }
}


export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(Device);
