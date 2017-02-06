import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Img, PullToRefresh, DataChannel } from 'mcs-lite-ui';
import { actions } from '../../modules/devices';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 4px;
`;

const StyledImg = styled(Img)`
  height: 200px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    height: 200px;
    padding: 8px 16px;
    margin: 4px;
    flex-basis: 100%;
  }

  > [data-width ~= half] {
    flex-grow: 1;
    flex-basis: 40%;
  }
`;

const DeviceDetail = (props) => {
  const onRefresh = (done) => {
    props.fetchDevices(done);
  };
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <div>
        <StyledImg src="http://placehold.it/350x150" />

        <Container>
          <CardWrapper>
            <DataChannel.ControlSwitch
              data-width="half"
              title="Title"
              subtitle="123125125125125"
              header={<a href="">Link</a>}
            />

            <DataChannel.ControlNumber
              data-width="half"
              title="Title"
              subtitle="123125125125125"
              header={<a href="">Link</a>}
            />

            <DataChannel.ControlRange
              title="Title"
              subtitle="123125125125125"
              header={<a href="">Link</a>}
              childrenProps={{
                labels: ['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'],
              }}
            />

            <DataChannel.ControlString
              data-width="half"
              title="Title"
              subtitle="123125125125125"
              header={<a href="">Link</a>}
            />
          </CardWrapper>
        </Container>
      </div>
    </PullToRefresh>
  );
};

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceDetail);
