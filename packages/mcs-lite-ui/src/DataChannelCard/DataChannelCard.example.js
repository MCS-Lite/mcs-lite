import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DataChannelCard from './index';

storiesOf('DataChannelCard', module)
  .addWithInfo(
    'API',
    'MCS data channel 的卡片。',
    () => <DataChannelCard>Content</DataChannelCard>,
    { inline: true },
  );
