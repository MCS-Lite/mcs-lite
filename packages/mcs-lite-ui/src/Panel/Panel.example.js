import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '.';

storiesOf('Panel', module).addWithInfo(
  'API',
  '',
  () =>
    <Panel>
      <header>Panel Header (header)</header>
      <main>Panel body (main)</main>
      <footer>footer</footer>
    </Panel>,
  { inline: true },
);
