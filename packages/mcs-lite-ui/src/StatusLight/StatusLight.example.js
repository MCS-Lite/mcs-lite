import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { theme } from 'mcs-lite-theme';
import StatusLight from '.';

const StyledStatusLight = styled(StatusLight)`
  width: 100px;
`;

storiesOf('StatusLight', module)
  .addWithInfo('API', 'default', () => <StatusLight />, { inline: true })
  .addWithInfo(
    'With color props',
    '',
    () =>
      <div>
        {Object.keys(theme.color).map(key =>
          <div key={key}>
            <StatusLight color={key} />
            {key}
          </div>,
        )}
      </div>,
    { inline: true },
  )
  .addWithInfo(
    'Custom width',
    'With width: 100px',
    () => <StyledStatusLight color="warning" />,
    { inline: true },
  );
