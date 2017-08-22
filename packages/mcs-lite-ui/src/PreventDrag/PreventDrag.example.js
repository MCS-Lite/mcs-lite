import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PreventDrag from '../PreventDrag';

storiesOf('PreventDrag', module).add(
  'API',
  withInfo({
    text: 'Try to drag the second one.',
    inline: true,
  })(() =>
    <div>
      <img src="http://placehold.it/350x150" alt="" />
      <PreventDrag>
        <img src="http://placehold.it/350x150" alt="" />
      </PreventDrag>

      <a href="">Link content</a>
      <PreventDrag>
        <a href="">Link content (PreventDrag)</a>
      </PreventDrag>
    </div>,
  ),
);
