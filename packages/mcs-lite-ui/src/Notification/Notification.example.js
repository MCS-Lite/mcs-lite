import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Notification from '.';
import P from '../P';
import Button from '../Button';

storiesOf('Notification', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <Notification>
        Do you want to go to Enalish version website?
      </Notification>,
    ),
  )
  .add(
    'With feedbck Button component',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <Notification>
        <P>Do you want to go to Enalish version website?</P>
        <Button>Yes, please</Button>
      </Notification>,
    ),
  );
