import React from 'react';
import { storiesOf } from '@kadira/storybook';
import withDataChannelCard from './withDataChannelCard';

const CustomDataChannel = withDataChannelCard(
  () => <div>CustomDataChannel</div>,
);

storiesOf('HOC', module)
  .addWithInfo(
    'withDataChannelCard',
    'Custom DataChannel',
    () =>
      <CustomDataChannel
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
      />,
    { inline: true },
  );
