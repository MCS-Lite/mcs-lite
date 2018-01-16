import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import DatetimePicker from '.';

storiesOf('DatetimePicker', module).add(
  'API',
  withInfo({
    text: `
      ~~~js
      function onChange(value: number): void {} // Unix Timestamp (milliseconds)
      ~~~
    `,

    inline: true,
  })(() => (
    <DatetimePicker
      defaultValue={1455780631722}
      onChange={value => action('DatetimePicker')(new Date(value).toString())}
    />
  )),
);
