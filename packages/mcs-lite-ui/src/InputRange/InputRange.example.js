import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import { kindList } from 'mcs-lite-theme';
import InputRange from '.';

const Wrapper = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('InputRange', module)
  .add(
    'API',
    withInfo({
      text: 'Default InputRange',
      inline: true,
    })(() => <InputRange />),
  )
  .add(
    'With kind props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <Wrapper>
        {kindList.map(key => <InputRange key={key} kind={key} />)}
      </Wrapper>
    )),
  );
