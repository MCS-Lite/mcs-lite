import React from 'react';
import { storiesOf } from '@storybook/react';
import Small from '.';
import P from '../P';

storiesOf('Small', module)
  .addWithInfo(
    'API',
    '縮小字型。',
    () => (
      <Small>
        Small content
      </Small>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Within <P>',
    '段落中出現。',
    () => (
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>
          &nbsp;Small content&nbsp;
        </Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With color',
    '來自上層的顏色。',
    () => (
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>
          &nbsp;Small content&nbsp;
        </Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    { inline: true, propTables: false },
  );
