import React from 'react';
import { storiesOf } from '@storybook/react';
import LandingHeader from '.';

storiesOf('LandingHeader', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <LandingHeader>
        <div>
          Content
        </div>
      </LandingHeader>,
    { inline: true },
  )
  .addWithInfo(
    'With offset props',
    'The `scrollTop` value of the document/window to get the shadow style.',
    () =>
      <LandingHeader offset={160}>
        offset 160
      </LandingHeader>,
    { inline: true },
  );
