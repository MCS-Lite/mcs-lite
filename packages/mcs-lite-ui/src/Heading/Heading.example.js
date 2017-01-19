import React from 'react';
import R from 'ramda';
import { storiesOf } from '@kadira/storybook';
import Heading from '.';
import theme from '../themes/default';

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
            <Heading key={key} level={key}>Level {key}</Heading>,
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
