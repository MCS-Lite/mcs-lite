// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PanelIcon from '.';
import * as Icons from 'mcs-lite-icon/lib/index';

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
