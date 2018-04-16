// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar size={30} src="//placehold.it/50x50" />),
  )
  .add(
    'default',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar />),
  );
