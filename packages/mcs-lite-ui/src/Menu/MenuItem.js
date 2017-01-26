import styled from 'styled-components';
import { darken1 } from 'mcs-lite-theme';

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 26px;
  cursor: pointer;
  box-sizing: border-box;
  color: ${props => props.theme.color.black};
  min-height: ${props => props.theme.base.inputHeight};

  * {
    transition: initial;
  }

  &:hover {
    background-color: ${props => props.theme.color.primary};
    color: white;

    * {
      color: white;
    }
  }

  &:active {
    background-color: ${props => darken1(props.theme.color.primary)};
    color: white;

    * {
      color: white;
    }
  }
`;

MenuItem.displayName = 'MenuItem';

export default MenuItem;
