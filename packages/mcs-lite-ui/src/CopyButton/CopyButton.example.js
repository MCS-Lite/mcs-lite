import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CopyButton from '.';

storiesOf('CopyButton', module).addWithInfo(
  'API',
  '',
  () => (
    <CopyButton text="devieKey">
      Copy
    </CopyButton>
  ),
  { inline: true }
);
