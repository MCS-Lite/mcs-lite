import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DatetimePicker from '.';

storiesOf('DatetimePicker', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <DatetimePicker
        defaultValue={new Date(1455780631722).valueOf()}
        onChange={console.log} // eslint-disable-line
        utcOffset={8}
      />,
    { inline: true },
  );
