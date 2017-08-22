import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Label from '.';

storiesOf('Label', module).add(
  'API',
  withInfo({
    text: 'default',
    inline: true,
  })(() => <Label required>Email</Label>),
);
