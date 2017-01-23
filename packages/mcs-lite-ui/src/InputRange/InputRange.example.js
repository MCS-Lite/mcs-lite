import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InputRange from '.';

storiesOf('InputRange', module)
  .addWithInfo(
    'API',
    'Default InputRange',
    () => <InputRange />,
    { inline: true },
  );
