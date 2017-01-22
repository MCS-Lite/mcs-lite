import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, DataChannelCard, DataChannel } from 'mcs-lite-ui';
import { theme } from 'mcs-lite-theme';

const StyledControlSwitch = styled(DataChannel.ControlSwitch)`
  width: 300px;
`;

export default () =>
  <ThemeProvider theme={theme}>
    <div>
      <DataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
      >
        <Button>mcs-lite-ui button</Button>
      </DataChannelCard>


      <StyledControlSwitch
        title="Title"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        defaultDataPoint={{
          value: true,
          recordedAt: '123125125125125',
        }}
      />
    </div>
  </ThemeProvider>;
