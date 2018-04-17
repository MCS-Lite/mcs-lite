// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .add(
    'Default',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar />),
  )
  .add(
    'Default - Large',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar size={150} />),
  )
  .add(
    'With Url',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar src="//placehold.it/30x30" />),
  )
  .add(
    'With Url - Large',
    withInfo({
      text: '',
      inline: true,
    })(() => <Avatar size={150} src="//placehold.it/150x150" />),
  );
