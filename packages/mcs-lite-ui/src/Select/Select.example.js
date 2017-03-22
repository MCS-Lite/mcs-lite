import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import { kindList } from 'mcs-lite-theme';
import Select from '.';
import InputGroup from '../InputGroup';

const Wrapper = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Select', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <Select
        items={[
          { value: 1, children: '1' },
          { value: 2, children: '2' },
        ]}
      />,
    { inline: true },
  )
  // .addWithInfo(
  //   'With kind props',
  //   '使用內建 kind props 樣式。',
  //   () =>
  //     <Wrapper>
  //       {
  //         kindList.map(key =>
  //           <Select key={key} kind={key}>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //           </Select>,
  //         )
  //       }
  //     </Wrapper>,
  //   { inline: true },
  // )
  // .addWithInfo(
  //   'API',
  //   '',
  //   () =>
  //     <Select>
  //       <option value="1">1</option>
  //       <option value="2">2</option>
  //     </Select>,
  //   { inline: true },
  // );
