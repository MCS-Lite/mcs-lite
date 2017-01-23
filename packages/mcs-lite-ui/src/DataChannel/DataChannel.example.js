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
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onClick: action('ControlSwitch onSubmit'),
        }}
      />,
    { inline: true },
  )
  .addWithInfo(
    'DataChannel.ControlInteger',
    '',
    () =>
      <DataChannel.ControlInteger
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onSubmit: action('ControlInteger onSubmit'),
        }}
      />,
    { inline: true },
  )

  .addWithInfo(
    'DataChannel.ControlFloat',
    '',
    () =>
      <DataChannel.ControlFloat
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onSubmit: action('ControlFloat onSubmit'),
        }}
      />,
    { inline: true },
  );
