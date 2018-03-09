// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import IconWarning from './IconWarning';

storiesOf('IconWarning', module).add(
  'IconWarning',
  withInfo({
    text: '50 X 45',
    inline: true,
  })(() => (
    <React.Fragment>
      <IconWarning />
      <IconWarning width={100} height={90} />
    </React.Fragment>
  )),
);
