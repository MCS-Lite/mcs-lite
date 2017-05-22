import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { kindList } from 'mcs-lite-theme';
import Toast from '.';

const DemoWrapper = styled.div`
  > * {
    margin-bottom: 16px;
  }
`;

storiesOf('Toast', module)
  .addWithInfo(
    'API',
    '',
    () => <Toast>Success! You have delete the item.</Toast>,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    '',
    () => (
      <DemoWrapper>
        {kindList.map(key => (
          <Toast key={key} kind={key}>{key} - You have delete the item.</Toast>
        ))}
      </DemoWrapper>
    ),
    { inline: true },
  );
