// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { theme } from 'mcs-lite-theme';
import Heading from '../Heading';
import B from '../B';
import A from '.';

storiesOf('A', module)
  .add(
    'API',
    withInfo({
      text: 'anchor A',
      inline: false,
    })(() => <A>Link</A>),
  )
  .add(
    'With color props',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <div>
        {Object.keys(theme.color).map(key =>
          <A key={key} color={key}>A link {key}</A>,
        )}
      </div>,
    ),
  )
  .add(
    'Nested children with Heading',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <Heading>
        Heading Level 1&nbsp;
        <B>
          <A>
            Link
          </A>
        </B>
      </Heading>,
    ),
  );
