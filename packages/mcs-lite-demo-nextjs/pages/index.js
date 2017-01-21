import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'mcs-lite-ui/lib/Button';
import DataChannelCard from 'mcs-lite-ui/lib/DataChannelCard';
import theme from 'mcs-lite-ui/lib/themes/default';

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
      Hello world!
    </div>
  </ThemeProvider>;
