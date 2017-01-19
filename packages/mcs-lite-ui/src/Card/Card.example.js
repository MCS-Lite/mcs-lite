import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from '.';

storiesOf('Card', module)
  .addWithInfo(
    'API',
    '一個簡單到不行的白底。',
    () => <Card>Card Content</Card>,
    { inline: true },
  );
