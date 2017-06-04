import React from 'react';
import { storiesOf } from '@storybook/react';
import Hr from '.';

storiesOf('Hr', module)
  .addWithInfo('API', 'default', () => <Hr />, { inline: true })
  .addWithInfo(
    'With children',
    'With string inside.',
    () =>
      <Hr>
        String
      </Hr>,
    { inline: true },
  );
