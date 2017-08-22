import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Panel from '.';

storiesOf('Panel', module).add(
  'API',
  withInfo({
    text: '',
    inline: true,
  })(() =>
    <Panel>
      <header>Panel Header (header)</header>
      <main>Panel body (main)</main>
      <footer>footer</footer>
    </Panel>,
  ),
);
