import React from 'react';
import { storiesOf } from '@kadira/storybook';
import theme, { kind } from '../themes/default';

const JsonDisplay = data =>
  <div><pre>{JSON.stringify(data, null, 2) }</pre></div>;

storiesOf('API', module)
  .add('[JSON] theme',
    () => <JsonDisplay data={theme} />,
  )
  .add('[JSON] kind',
    () => <JsonDisplay data={Object.keys(kind)} />,
  );
