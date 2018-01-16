import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Small from '.';
import P from '../P';

storiesOf('Small', module)
  .add(
    'API',
    withInfo({
      text: '縮小字型。',
      inline: true,
    })(() => <Small>Small content</Small>),
  )
  .add(
    'Within <P>',
    withInfo({
      text: '段落中出現。',
      inline: true,
      propTables: false,
    })(() => (
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>&nbsp;Small content&nbsp;</Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    )),
  )
  .add(
    'With color',
    withInfo({
      text: '來自上層的顏色。',
      inline: true,
      propTables: false,
    })(() => (
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>&nbsp;Small content&nbsp;</Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    )),
  );
