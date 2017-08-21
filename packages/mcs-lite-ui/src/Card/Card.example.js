import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from '.';

storiesOf('Card', module).add(
  'API',
  withInfo({
    text: '一個簡單到不行的白底。',
    inline: true,
  })(() => <Card>Card Content</Card>),
);
