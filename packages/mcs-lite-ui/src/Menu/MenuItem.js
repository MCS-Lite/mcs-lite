import styled from 'styled-components';
import { darken1, darken2 } from 'mcs-lite-theme';

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 26px;
  cursor: pointer;
  color: ${props => props.theme.color.black};
  box-sizing: border-box;
  min-height: ${props => props.theme.base.inputHeight};

  * {
    transition: initial;
  }

  &:hover {
    background-color: ${props => darken1(props.theme.color.primary)};
    color: white;

    * {
      color: white;
    }
  }

  &:active {
    background-color: ${props => darken2(props.theme.color.primary)};
    color: white;

    * {
      color: white;
    }
  }
`;

MenuItem.displayName = 'MenuItem';

export default MenuItem;
