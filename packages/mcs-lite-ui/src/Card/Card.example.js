import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './index';

storiesOf('Card', module)
  .add('Simple', () =>
    <Card>
      Card Content
    </Card>,
  );
