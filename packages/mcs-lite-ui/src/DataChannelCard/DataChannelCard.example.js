import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DataChannelCard, { Footer } from './DataChannelCard';
import Switch from '../Switch';

const StyledDataChannelCard = styled(DataChannelCard)`
  ${Footer} {
    width: 50%;
  }
`;

storiesOf('DataChannelCard', module)
  .add(
    'API',
    withInfo({
      text: 'MCS data channel 的卡片。',
      inline: true,
    })(() => (
      <DataChannelCard
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href=".">Link</a>}
      >
        Children
      </DataChannelCard>
    )),
  )
  .add(
    'Custom width and height',
    withInfo({
      text: '固定寬度與高度。',
      inline: true,
    })(() => {
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
    }),
  )
  .add(
    'Without description',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <DataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
      >
        <Switch />
      </DataChannelCard>
    )),
  )
  .add(
    'With empty description',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <DataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description=""
      >
        <Switch />
      </DataChannelCard>
    )),
  )
  .add(
    'With Component selector',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StyledDataChannelCard
        header="V"
        title="Title"
        subtitle="Last data point time : 2015-06-12 12:00"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
      >
        Children
      </StyledDataChannelCard>
    )),
  );
