// @flow
import * as React from 'react';
import styled from 'styled-components';
import { darken3 } from 'mcs-lite-theme';

export const Container: React.ComponentType<{
  size?: number,
  kind?: string,
  checked: boolean,
}> = styled.div`
  line-height: 1em;
  font-size: 12px;
  border-radius: 2px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    border 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  color: ${props => {
    if (props.checked) {
      return props.kind === 'default'
        ? props.theme.color.grayBase
        : props.theme.color.white;
    }
    return 'transparent';
  }};
  background-color: ${props =>
    props.checked ? props.theme.color[props.kind] : props.theme.color.white};
  border: 1px solid
    ${props =>
      props.checked
        ? darken3(props.theme.color[props.kind])
        : props.theme.color.grayDark};
`;

export const Content: React.ComponentType<{ checked: boolean }> = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(${props => (props.checked ? 1 : 0)});
  transform-origin: 50% 50%;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    fill: currentColor;
  }
`;
