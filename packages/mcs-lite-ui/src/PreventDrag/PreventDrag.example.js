import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PreventDrag from '../PreventDrag';

storiesOf(
  'PreventDrag',
  module,
).addWithInfo(
  'API',
  'Try to drag the second one.',
  () => (
    <div>
      <img src="http://placehold.it/350x150" alt="" />
      <PreventDrag>
        <img src="http://placehold.it/350x150" alt="" />
      </PreventDrag>

      <a href="">Link content</a>
      <PreventDrag>
        <a href="">Link content (PreventDrag)</a>
      </PreventDrag>
    </div>
  ),
  { inline: true },
);
