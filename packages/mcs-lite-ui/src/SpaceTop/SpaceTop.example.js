import React from 'react';
import { storiesOf } from '@storybook/react';
import SpaceTop from '.';

storiesOf('SpaceTop', module).addWithInfo(
  'API',
  'margin-top',
  () =>
    <SpaceTop height={20}>
      SpaceTop content
    </SpaceTop>,
  { inline: true },
);
