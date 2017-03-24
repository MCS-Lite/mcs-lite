import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
  .addWithInfo('API', 'Default InputRange', () => <InputRange />, {
    inline: true,
  })
  .addWithInfo(
    'With kind props',
    '',
    () => (
      <Wrapper>
        {kindList.map(key => <InputRange key={key} kind={key} />)}
      </Wrapper>
    ),
    { inline: true }
  );
