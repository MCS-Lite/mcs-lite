import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DatetimePicker from '.';

storiesOf('DatetimePicker', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <DatetimePicker
        defaultValue={new Date().valueOf()}
        onChange={console.log}
      />,
    { inline: true },
  );
