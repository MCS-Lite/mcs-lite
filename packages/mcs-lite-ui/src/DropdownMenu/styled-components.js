// @flow
import * as React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import Button from '../Button';

export const StyledButton: React.ComponentType<{
  active: boolean,
}> = styled(Button)`
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.color.white};
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: ${props => (props.active ? 'rotate(-180deg)' : 'initial')};
  }
`;

export const StyledMenu = styled(Menu)`
  border: 1px solid ${props => props.theme.color.grayBase};
`;
