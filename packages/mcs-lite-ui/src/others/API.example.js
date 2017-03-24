import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { kindList, theme } from 'mcs-lite-theme';

const JsonDisplay = ({ data }) => (
  <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
);

storiesOf('API [mcs-lite-theme]', module)
  .add('[JSON] theme', () => <JsonDisplay data={theme} />)
  .add('[JSON] kind', () => <JsonDisplay data={kindList} />);
