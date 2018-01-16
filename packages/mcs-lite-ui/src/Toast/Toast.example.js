import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { kindList } from 'mcs-lite-theme';
import Toast from '.';

const DemoWrapper = styled.div`
  > * {
    margin-bottom: 16px;
  }
`;

storiesOf('Toast', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => <Toast>Success! You have delete the item.</Toast>),
  )
  .add(
    'With kind props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <DemoWrapper>
        {kindList.map(key => (
          <Toast key={key} kind={key}>
            {key} - You have delete the item.
          </Toast>
        ))}
      </DemoWrapper>
    )),
  );
