import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatetimePicker from '.';

storiesOf('DatetimePicker', module).addWithInfo(
  'API',
  `
      ~~~js
      function onChange(value: number): void {} // Unix Timestamp (milliseconds)
      ~~~
    `,
  () => (
    <DatetimePicker
      defaultValue={1455780631722}
      onChange={value => action('DatetimePicker')(new Date(value).toString())}
    />
  ),
  { inline: true },
);
