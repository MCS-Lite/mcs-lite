// @flow
import * as React from 'react';
import styled from 'styled-components';

export const SVG: React.ComponentType<*> = styled.svg`
  height: 14px;
`;

export const StyledLabel: React.ComponentType<*> = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 0;

  > input {
    display: none;
  }

  > ${SVG} {
    margin-right: 5px;
  }
`;

export const BoxCircle: React.ComponentType<{ value: boolean }> = styled.circle`
  fill: ${props => props.theme.color.primary};
  stroke: ${props => (props.value ? '#067CB0' : props.theme.color.grayBase)};
  stroke-width: 1px;
  transition: stroke 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const CheckCircle: React.ComponentType<{
  value: boolean,
}> = styled.circle`
  fill: ${props => props.theme.color.white};
  transform-origin: 50% 50%;
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transform: scale(${props => (props.value ? 0.5 : 1)});
`;
