// @flow
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { theme } from 'mcs-lite-theme';
import Heading from '../Heading';
import B from '../B';
import A from '.';

storiesOf('A', module)
  .addWithInfo('API', 'anchor A', () => <A>Link</A>, { inline: true })
  .addWithInfo(
    'With color props',
    '',
    () => (
      <div>
        {Object.keys(theme.color).map(key => (
          <A key={key} color={key}>A link {key}</A>
        ))}
      </div>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Nested children with Heading',
    '',
    () => (
      <Heading>
        Heading Level 1&nbsp;
        <B>
          <A>
            Link
          </A>
        </B>
      </Heading>
    ),
    { inline: true },
  );
