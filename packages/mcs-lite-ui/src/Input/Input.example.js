import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { kindList } from 'mcs-lite-theme';
import Input from '.';

const Wrapper = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Input', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => <Input placeholder="placeholder" />),
  )
  .add(
    'With focus props',
    withInfo({
      text: '',
      inline: true,
    })(() => <Input placeholder="placeholder" focus />),
  )
  .add(
    'With kind props',
    withInfo({
      text: '使用內建 kind props 樣式。',
      inline: true,
    })(() =>
      <Wrapper>
        {kindList.map(key => <Input key={key} kind={key} placeholder={key} />)}
      </Wrapper>,
    ),
  )
  .add(
    'With type props',
    withInfo({
      text: '使用內建 type props 樣式。',
      inline: true,
    })(() => {
      const types = [
        'text',
        'email',
        'number',
        'password',
        'tel',
        'search',
        'month',
        'week',
        'date',
        'color',
        'file',
        'radio',
        'time',
        'url',
        'range',
      ];

      return (
        <Wrapper>
          {types.map(key => <Input key={key} type={key} placeholder={key} />)}
        </Wrapper>
      );
    }),
  );
