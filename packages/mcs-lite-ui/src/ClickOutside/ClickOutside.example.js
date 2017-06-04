/* eslint react/no-multi-comp: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ClickOutside from '.';
import Card from '../Card';

storiesOf('ClickOutside', module).addWithInfo(
  'API',
  '',
  () =>
    <ClickOutside onClick={action('ClickOutside')}>
      <Card>
        Inside (Try to click outside.)
      </Card>
    </ClickOutside>,
  { inline: true, propTables: [ClickOutside] },
);
