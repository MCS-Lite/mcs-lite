import React from 'react';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { theme } from 'mcs-lite-theme';
import Heading from '.';

const remToPx = rem =>
  `${parseFloat(theme.base.fontSize, 10) * parseFloat(rem, 10)}px`;

storiesOf('Heading', module)
  .add(
    'API',
    withInfo({
      text: 'Default h1 & color: currentColor',
      inline: true,
    })(() => <Heading>Level 1</Heading>),
  )
  .add(
    'With level props',
    withInfo({
      text: '使用不同等級的 Level。',
      inline: true,
      propTables: false,
    })(() => (
      <div>
        {R.range(1, 7).map(key => (
          <Heading key={key} level={key}>
            h{key} - Level {key} &nbsp; ({theme.fontSize[`h${key}`]} ={' '}
            {remToPx(theme.fontSize[`h${key}`])})
          </Heading>
        ))}
      </div>
    )),
  )
  .add(
    'With color props',
    withInfo({
      text: '使用不同等級的 Color。',
      inline: true,
      propTables: false,
    })(() => (
      <div>
        {Object.keys(theme.color).map(key => (
          <Heading key={key} level={2} color={key}>
            Level 2 {key}
          </Heading>
        ))}
      </div>
    )),
  );
