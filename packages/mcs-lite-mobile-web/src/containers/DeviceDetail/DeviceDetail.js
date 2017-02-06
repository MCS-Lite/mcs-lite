import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Img, PullToRefresh, PreventDrag, DataChannel } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';

const StyledImg = styled(Img)`
  height: 200px;
`;

const CardContainer = styled.div`

  > * {
    height: 200px;
    padding: 8px 16px;
  }
`;

const DeviceDetail = (props) => {
  const onRefresh = (done) => {
    props.fetchDevices(done);
  };
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <div>
        <PreventDrag>
          <StyledImg src="http://placehold.it/350x150" />
        </PreventDrag>

        <CardContainer>
          <DataChannel.ControlSwitch
            title="Title"
            subtitle="123125125125125"
            header={<a href="">Link</a>}
          />

          <DataChannel.ControlNumber
            title="Title"
            subtitle="123125125125125"
            header={<a href="">Link</a>}
          />

          <DataChannel.ControlString
            title="Title"
            subtitle="123125125125125"
            header={<a href="">Link</a>}
          />
        </CardContainer>
      </div>
    </PullToRefresh>
  );
};

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceDetail);
