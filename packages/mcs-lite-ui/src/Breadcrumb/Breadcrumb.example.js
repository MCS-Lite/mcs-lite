// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Breadcrumb from '.';

storiesOf('Breadcrumb', module).add(
  'API',
  withInfo({
    text: 'default',
    inline: true,
  })(() => (
    <Breadcrumb>
      <div>item 1</div>
      <div>item 2</div>
    </Breadcrumb>
  )),
);
