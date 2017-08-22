import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CopyButton from '.';

storiesOf('CopyButton', module).add(
  'API',
  withInfo({
    text: '',
    inline: true,
  })(() =>
    <CopyButton text="devieKey">
      Copy
    </CopyButton>,
  ),
);
