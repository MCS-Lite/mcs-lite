// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Tooltip from './Tooltip';
import {
  RIGHT_CENTER,
  LEFT_CENTER,
  TOP_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from './position.config';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 300px;

  > * {
    margin-bottom: 30px;
  }
`;

storiesOf('Tooltip', module)
  .add(
    'default',
    withInfo({
      text: 'RIGHT_CENTER',
      inline: true,
    })(() => (
      <Tooltip hover content="Tooltip hover content">
        <div>Click me</div>
      </Tooltip>
    )),
  )
  .add(
    'With position',
    withInfo({
      text: `
~~~js
import {
  RIGHT_CENTER,
  LEFT_CENTER,
  TOP_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from 'mcs-lite-ui/lib/Tooltip/position.config';
~~~
`,
      inline: true,
    })(() => (
      <Wrapper>
        <Tooltip content="Tooltip hover content" position={RIGHT_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>RIGHT_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={LEFT_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>LEFT_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_RIGHT}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_RIGHT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_LEFT}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_LEFT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_RIGHT}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_RIGHT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_LEFT}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_LEFT</div>
        </Tooltip>
      </Wrapper>
    )),
  );
