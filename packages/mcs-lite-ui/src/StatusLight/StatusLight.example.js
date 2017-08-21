import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { theme } from 'mcs-lite-theme';
import StatusLight from '.';

const StyledStatusLight = styled(StatusLight)`
  width: 100px;
`;

storiesOf('StatusLight', module)
  .add(
    'API',
    withInfo({
      text: 'default',
      inline: true,
    })(() => <StatusLight />),
  )
  .add(
    'With color props',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <div>
        {Object.keys(theme.color).map(key =>
          <div key={key}>
            <StatusLight color={key} />
            {key}
          </div>,
        )}
      </div>,
    ),
  )
  .add(
    'Custom width',
    withInfo({
      text: 'With width: 100px',
      inline: true,
    })(() => <StyledStatusLight color="warning" />),
  );
