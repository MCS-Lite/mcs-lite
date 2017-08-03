import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.';

storiesOf('Label', module).addWithInfo(
  'API',
  'default',
  () => <Label required>Email</Label>,
  { inline: true },
);
