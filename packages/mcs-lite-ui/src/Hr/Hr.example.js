import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Hr from '.';

storiesOf('Hr', module)
  .add(
    'API',
    withInfo({
      text: 'default',
      inline: true,
    })(() => <Hr />),
  )
  .add(
    'With children',
    withInfo({
      text: 'With string inside.',
      inline: true,
    })(() => <Hr>String</Hr>),
  );
