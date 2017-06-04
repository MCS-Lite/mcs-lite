import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from '.';
import P from '../P';
import Button from '../Button';

storiesOf('Notification', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <Notification>
        Do you want to go to Enalish version website?
      </Notification>,
    { inline: true },
  )
  .addWithInfo(
    'With feedbck Button component',
    '',
    () =>
      <Notification>
        <P>Do you want to go to Enalish version website?</P>
        <Button>Yes, please</Button>
      </Notification>,
    { inline: true },
  );
