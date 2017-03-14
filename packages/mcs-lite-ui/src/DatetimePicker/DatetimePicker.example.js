import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DatetimePicker from '.';

storiesOf('DatetimePicker', module)
  .addWithInfo(
    'API',
    `
      ~~~js
      function onChange(value: number): void {} // Unix Timestamp (milliseconds)
      ~~~
    `,
    () =>
      <DatetimePicker
        defaultValue={1455780631722}
        onChange={action('DatetimePicker onChange(value: number) Unix Timestamp (milliseconds)')}
        utcOffset={8}
      />,
    { inline: true },
  );
