import React from 'react';
import { storiesOf } from '@kadira/storybook';
import B from '.';
import P from '../P';
import Small from '../Small';
import Heading from '../Heading';

storiesOf('B', module)
  .addWithInfo(
    'API',
    '粗體。',
    () =>
      <B>
        Bold content
      </B>,
    { inline: true },
  )
  .addWithInfo(
    'CJK',
    '粗體中文字。',
    () =>
      <Heading level={4}>
        <B>
          控制開關粗體字
        </B>
      </Heading>,
    { inline: true },
  )
  .addWithInfo(
    'Within <P>',
    '段落中出現。',
    () =>
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>
          <B>
            &nbsp;Bold content&nbsp;
          </B>
        </Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With color',
    '來自上層的顏色。',
    () =>
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <B>
          &nbsp;Bold content&nbsp;
        </B>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>,
    { inline: true, propTables: false },
  );
