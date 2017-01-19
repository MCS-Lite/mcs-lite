import React from 'react';
import { storiesOf } from '@kadira/storybook';
import JSONTree from 'react-json-tree';
import theme, { kind } from '../themes/default';

storiesOf('APIs', module)
  .add('[JSON] theme',
    () => <JSONTree data={theme} shouldExpandNode={() => true} />,
  )
  .add('[JSON] kind',
    () => <JSONTree data={Object.keys(kind)} shouldExpandNode={() => true} />,
  );
