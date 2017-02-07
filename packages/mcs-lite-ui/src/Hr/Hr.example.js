import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hr from '.';

storiesOf('Hr', module)
  .addWithInfo(
    'API',
    'default',
    () =>
      <Hr />,
    { inline: true },
  )
  .addWithInfo(
    'With children',
    'With string inside.',
    () =>
      <Hr>
        String
      </Hr>,
    { inline: true },
  );
