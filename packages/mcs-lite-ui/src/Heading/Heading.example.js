import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Heading from './index';
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
        <Heading level={1}>Level 1</Heading>
        <Heading level={2}>Level 2</Heading>
        <Heading level={3}>Level 3</Heading>
        <Heading level={4}>Level 4</Heading>
      </div>,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With color props',
    '使用不同等級的 Level。',
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
