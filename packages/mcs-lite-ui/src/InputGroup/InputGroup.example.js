import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from '../Input';
import Button from '../Button';
import InputGroup from '../InputGroup';

const Wrapper = styled.div`
  > * {
    margin-bottom: 15px;
  }
`;

storiesOf('InputGroup', module).addWithInfo(
  'API',
  '',
  () => (
    <Wrapper>
      <InputGroup>
        <Button size="small">Button 1</Button>
        <Button kind="default" size="small">Button 2</Button>
      </InputGroup>

      <InputGroup>
        <Button>Button 1</Button>
        <Button kind="default">Button Two</Button>
        <Button kind="warning">Button Three</Button>
      </InputGroup>

      <InputGroup>
        <Button>大於</Button>
        <Input placeholder="預設值：20" />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Input 1" />
        <Button>Button 1</Button>
      </InputGroup>

      <InputGroup>
        <Button>Button 1</Button>
        <Input placeholder="Input 1" />
        <Button>Button 2</Button>
      </InputGroup>

      <InputGroup>
        <Button>之間</Button>
        <Input placeholder="預設值：0" />
        <Button square>和</Button>
        <Input placeholder="預設值：100" />
      </InputGroup>

    </Wrapper>
  ),
  { inline: true },
);
