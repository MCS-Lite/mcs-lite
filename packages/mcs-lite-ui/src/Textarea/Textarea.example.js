import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { kindList } from 'mcs-lite-theme';
import Textarea from '.';

const Wrapper = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Textarea', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => <Textarea placeholder="placeholder" rows="3" />),
  )
  .add(
    'With kind props',
    withInfo({
      text: '使用內建 kind props 樣式。',
      inline: true,
    })(() =>
      <Wrapper>
        {kindList.map(key =>
          <Textarea key={key} kind={key} placeholder={key} />,
        )}
      </Wrapper>,
    ),
  );
