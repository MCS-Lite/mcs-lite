// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as Icons from 'mcs-lite-icon/lib/index';
import PanelIcon from '.';

storiesOf('PanelIcon', module).add(
  'API',
  withInfo({
    text: 'default',
    inline: true,
  })(() => (
    <PanelIcon>
      <Icons.IconMenu />
    </PanelIcon>
  )),
);
