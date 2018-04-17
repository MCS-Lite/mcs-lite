// @flow
import * as React from 'react';
import styled from 'styled-components';

export const Container: React.ComponentType<{
  height: number,
}> = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid ${props => props.theme.color.grayBase};
  border-radius: 3px;
  height: ${props => props.height}px;
  background-color: ${props => props.theme.color.white};
  overflow: auto;

  > * {
    display: flex;
    margin: 10px;
    min-width: 45%;
    outline: none;
    cursor: pointer;
  }
`;

export const CheckboxWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 5px;
`;
