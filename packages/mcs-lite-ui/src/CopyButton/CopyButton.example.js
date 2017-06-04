import React from 'react';
import { storiesOf } from '@storybook/react';
import CopyButton from '.';

storiesOf('CopyButton', module).addWithInfo(
  'API',
  '',
  () =>
    <CopyButton text="devieKey">
      Copy
    </CopyButton>,
  { inline: true },
);
