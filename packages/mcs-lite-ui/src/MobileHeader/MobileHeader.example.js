import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { IconMenu, IconSearch } from 'mcs-lite-icon';
import { MobileHeader, MobileHeaderIcon } from '.';

storiesOf('MobileHeader', module)
  .addWithInfo(
    'API',
    '',
    () => (
      <MobileHeader
        title="Device List"
        leftChildren={
          <MobileHeaderIcon>
            <IconMenu />
          </MobileHeaderIcon>
        }
      />
    ),
    { inline: true },
  )
  .addWithInfo(
    'With right props',
    '',
    () => (
      <MobileHeader
        title="Device List"
        leftChildren={
          <MobileHeaderIcon component="div">
            <IconMenu />
          </MobileHeaderIcon>
        }
        rightChildren={
          <MobileHeaderIcon>
            <IconSearch />
          </MobileHeaderIcon>
        }
      />
    ),
    { inline: true },
  );
