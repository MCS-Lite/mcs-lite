import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import DataChannelCard from './DataChannelCard';
import Switch from '../Switch';

storiesOf('DataChannelCard', module)
  .addWithInfo(
    'API',
    'MCS data channel 的卡片。',
    () => (
      <DataChannelCard
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
      >
        Children
      </DataChannelCard>
    ),
    { inline: true }
  )
  .addWithInfo(
    'Custom width and height',
    '固定寬度與高度。',
    () => {
      const MCSSyledCard = styled(DataChannelCard)`
        width: 300px;
        height: 400px;
      `;

      return (
        <MCSSyledCard
          header="V"
          title="Title"
          subtitle="Last data point time : 2015-06-12 12:00"
          description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        >
          <Switch />
        </MCSSyledCard>
      );
    },
    { inline: true }
  )
  .addWithInfo(
    'Without description',
    '',
    () => (
      <DataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
      >
        <Switch />
      </DataChannelCard>
    ),
    { inline: true }
  )
  .addWithInfo(
    'With empty description',
    '',
    () => (
      <DataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description=""
      >
        <Switch />
      </DataChannelCard>
    ),
    { inline: true }
  );
