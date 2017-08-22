import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SpaceTop from '.';

storiesOf('SpaceTop', module).add(
  'API',
  withInfo({
    text: 'margin-top',
    inline: true,
  })(() =>
    <SpaceTop height={20}>
      SpaceTop content
    </SpaceTop>,
  ),
);
