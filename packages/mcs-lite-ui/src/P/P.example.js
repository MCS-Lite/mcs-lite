import React from 'react';
import { storiesOf } from '@kadira/storybook';
import P from '.';
import theme from '../themes/default';

storiesOf('P', module)
  .addWithInfo(
    'API',
    `段落使用。 (${theme.fontSize.p})`,
    () =>
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur esse dolore
        incididunt incididunt aliquip pariatur est minim officia sit. Nulla
        pariatur duis duis quis commodo cupidatat voluptate enim culpa elit
        adipisicing do cupidatat sint anim. Cillum elit magna occaecat proident
        sit cupidatat ad quis sunt id culpa culpa. Ad duis nulla in incididunt
        amet consequat officia ad voluptate voluptate. Pariatur eiusmod ullamco
        cupidatat non magna officia aute magna deserunt qui aute dolor eu.
        Qui amet non ex cillum sunt ad velit consequat ipsum velit.
      </P>,
    { inline: true },
  )
  .addWithInfo(
    'With color props',
    '使用不同等級的 Color',
    () =>
      <div>
        {
          Object.keys(theme.color).map(key =>
            <P key={key} color={key}>Paragraph {key}</P>,
          )
        }
      </div>,
    { inline: true },
  )
  .addWithInfo(
    'Nested children with div',
    'p 裡面不能有 div，會自動換成 div。',
    () =>
      <P>
        <div>
          <span>Qui amet non ex cillum sunt ad velit consequat ipsum velit.</span>
        </div>
      </P>,
    { inline: true },
  );
