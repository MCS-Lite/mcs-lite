import React from 'react';
import R from 'ramda';
import { storiesOf } from '@kadira/storybook';
import Heading from '.';
import theme from '../themes/default';

const remToPx = rem => `${Number(theme.base.fontSize.split('px')[0]) * Number(rem.split('rem')[0])}px`;

storiesOf('Heading', module)
  .addWithInfo(
    'API',
    'Default h1',
    () => <Heading>Level 1</Heading>,
    { inline: true },
  )
  .addWithInfo(
    'With level props',
    '使用不同等級的 Level。',
    () =>
      <div>
        {
          R.range(1, 7).map(key =>
            <Heading key={key} level={key}>
              h{key} - Level {key} &nbsp;
              ({theme.fontSize[`h${key}`]} = {remToPx(theme.fontSize[`h${key}`])})
            </Heading>,
          )
        }
      </div>,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With color props',
    '使用不同等級的 Color。',
    () =>
      <div>
        {
          Object.keys(theme.color).map(key =>
            <Heading key={key} level={2} color={key}>Level 2 {key}</Heading>,
          )
        }
      </div>,
    { inline: true, propTables: false },
  );
