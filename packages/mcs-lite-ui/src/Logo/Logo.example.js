// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MCS from './MCS';

storiesOf('Logo', module).add(
  'MCS',
  withInfo({
    text: '116 X 28',
    inline: true,
  })(() => (
    <React.Fragment>
      <MCS />
      <MCS width={232} height={56} />
    </React.Fragment>
  )),
);
