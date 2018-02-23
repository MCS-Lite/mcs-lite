// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import InputGroup from 'mcs-lite-ui/lib/InputGroup/InputGroup';
import Input from 'mcs-lite-ui/lib/Input/Input';
import Button from 'mcs-lite-ui/lib/Button/Button';
import Menu from 'mcs-lite-ui/lib/Menu/Menu';

export const StyledMenu: React.ComponentType<{
  width: number,
}> = styled(Menu)`
  position: absolute;
  overflow-y: hidden;
  overflow-x: hidden;
  border: 1px solid ${props => props.theme.color.grayDark};
  box-sizing: border-box;
  width: ${props => props.width}px;

  /* Note: override react-virtualized style */
  * {
    outline: 0;
  }
`;

export const StyledInputGroup = styled(InputGroup)`
  position: relative;

  > * {
    ${props =>
      props.disableFilter &&
      css`
        cursor: pointer;
      `};
  }
`;

export const StyledButton: React.ComponentType<{
  active: boolean,
}> = styled(Button)`
  font-size: 18px;

  svg {
    fill: ${props => props.theme.color.white};
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: ${props => (props.active ? 'rotate(-180deg)' : 'initial')};
  }
`;

export const NoRowWrapper = styled.div`
  height: ${props => props.theme.height.normal};
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${props => props.theme.color.grayBase};
`;

export const FakeInputValue = styled(Input)`
  position: absolute;
  background-color: transparent;
  border: 1px solid transparent;
  user-select: none;
  pointer-events: none;
  width: ${props => `calc(100% - ${props.theme.height.normal})`};

  &:focus {
    border: 1px solid transparent;
    box-shadow: none;
  }
`;
