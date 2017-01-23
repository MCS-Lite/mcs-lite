import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import { kindList } from 'mcs-lite-theme';
import Textarea from '.';

const Wrapper = styled.div`

  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Textarea', module)
  .addWithInfo(
    'API',
    '',
    () => <Textarea placeholder="placeholder" rows="3" />,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    '使用內建 kind props 樣式。',
    () =>
      <Wrapper>
        {
          kindList.map(key => <Textarea key={key} kind={key} placeholder={key} />)
        }
      </Wrapper>,
    { inline: true },
  );
