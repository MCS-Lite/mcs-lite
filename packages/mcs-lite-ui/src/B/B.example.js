import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import B from '.';
import P from '../P';
import Small from '../Small';
import Heading from '../Heading';

storiesOf('B', module)
  .add(
    'API',
    withInfo({
      text: '粗體。',
      inline: true,
    })(() =>
      <B>
        Bold content
      </B>,
    ),
  )
  .add(
    'CJK',
    withInfo({
      text: '粗體中文字。',
      inline: true,
    })(() =>
      <Heading level={4}>
        <B>
          控制開關粗體字
        </B>
      </Heading>,
    ),
  )
  .add(
    'Within <P>',
    withInfo({
      text: '段落中出現。',
      inline: true,
      propTables: false,
    })(() =>
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>
          <B>
            &nbsp;Bold content&nbsp;
          </B>
        </Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>,
    ),
  )
  .add(
    'With color',
    withInfo({
      text: '來自上層的顏色。',
      inline: true,
      propTables: false,
    })(() =>
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <B>
          &nbsp;Bold content&nbsp;
        </B>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>,
    ),
  );
