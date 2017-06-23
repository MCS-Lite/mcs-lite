import React from 'react';
import { storiesOf } from '@storybook/react';
import TextCenter from '.';

storiesOf('TextCenter', module).addWithInfo(
  'API',
  '',
  () =>
    <TextCenter>
      Center
    </TextCenter>,
  { inline: true },
);
