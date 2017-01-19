import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DataChannelCard from '.';
import Switch from '../Switch';

storiesOf('DataChannelCard', module)
  .addWithInfo(
    'API',
    'MCS data channel 的卡片。',
    () =>
      <DataChannelCard
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
      >
        Children
      </DataChannelCard>,
    { inline: true },
  )
  .addWithInfo(
    'Switch data channel',
    '套用 Switch component。',
    () =>
      <DataChannelCard
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
      >
        <Switch />
      </DataChannelCard>,
    { inline: true },
  );
