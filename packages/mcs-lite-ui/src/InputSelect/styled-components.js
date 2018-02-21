// @flow
import * as React from 'react';
import styled from 'styled-components';
import InputGroup from 'mcs-lite-ui/lib/InputGroup/InputGroup';
import Input from 'mcs-lite-ui/lib/Input/Input';
import Button from 'mcs-lite-ui/lib/Button/Button';
import Menu from 'mcs-lite-ui/lib/Menu/Menu';

export const StyledMenu = styled(Menu)`
  overflow-y: hidden;
  overflow-x: hidden;
  border: 1px solid ${props => props.theme.color.grayDark};

  /* Note: override react-virtualized style */
  * {
    outline: 0;
  }
`;

export const StyledInputGroup = styled(InputGroup)`
  position: relative;
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
  padding-left: 15px;
`;

export const FakeInputValue = styled(Input)`
  position: absolute;
  background-color: transparent;
  border: 1px solid transparent;
  user-select: none;
  pointer-events: none;

  &:focus {
    border: 1px solid transparent;
    box-shadow: none;
  }
`;
