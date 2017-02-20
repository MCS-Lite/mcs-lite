import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import { kindList } from 'mcs-lite-theme';
import Input from '.';

const Wrapper = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Input', module)
  .addWithInfo(
    'API',
    '',
    () => <Input placeholder="placeholder" />,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    '使用內建 kind props 樣式。',
    () =>
      <Wrapper>
        {
          kindList.map(key => <Input key={key} kind={key} placeholder={key} />)
        }
      </Wrapper>,
    { inline: true },
  )
  .addWithInfo(
    'With type props',
    '使用內建 type props 樣式。',
    () => {
      const types = [
        'text', 'email', 'number', 'password', 'tel', 'search', 'month', 'week',
        'date', 'color', 'file', 'radio', 'time', 'url', 'range',
      ];

      return (
        <Wrapper>
          {
            types.map(key => <Input key={key} type={key} placeholder={key} />)
          }
        </Wrapper>
      );
    },
    { inline: true },
  );
