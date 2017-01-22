import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import {
  ControlSwitch,
  ControlInteger,
  ControlFloat,
 } from '.';

storiesOf('DataChannel', module)
  .addWithInfo(
    'ControlSwitch',
    '',
    () =>
      <ControlSwitch
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
    'ControlInteger',
    '',
    () =>
      <ControlInteger
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
    'ControlFloat',
    '',
    () =>
      <ControlFloat
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
