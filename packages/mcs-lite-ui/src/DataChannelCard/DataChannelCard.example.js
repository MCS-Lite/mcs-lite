import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DataChannelCard from './index';

storiesOf('DataChannelCard', module)
  .add('Simple', () =>
    <DataChannelCard>
      DataChannelCard Content
    </DataChannelCard>,
  );
