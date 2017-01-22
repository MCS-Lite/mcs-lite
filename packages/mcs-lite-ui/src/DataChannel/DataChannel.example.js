import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DataChannel from '.';

storiesOf('DataChannel', module)
  .addWithInfo(
    'DataChannel.ControlSwitch',
    '',
    () =>
      <DataChannel.ControlSwitch
        title="Title"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        onChange={action('onChange')}
        // value={false}
        defaultDataPoint={{
          value: true,
          recordedAt: '123125125125125',
        }}
        // socketConfig="/devices/deviceId/dataChannels/dataChnId"
      />,
    { inline: true },
  )
  .addWithInfo(
    'DataChannel.ControlInteger',
    '',
    () =>
      <DataChannel.ControlInteger
        title="Title"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        onChange={action('onChange')}
        // value={false}
        defaultDataPoint={{
          value: true,
          recordedAt: '123125125125125',
        }}
        // socketConfig="/devices/deviceId/dataChannels/dataChnId"
      />,
    { inline: true },
  )

  .addWithInfo(
    'DataChannel.ControlFloat',
    '',
    () =>
      <DataChannel.ControlFloat
        title="Title"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        onChange={action('onChange')}
        // value={false}
        defaultDataPoint={{
          value: true,
          recordedAt: '123125125125125',
        }}
        // socketConfig="/devices/deviceId/dataChannels/dataChnId"
      />,
    { inline: true },
  );
