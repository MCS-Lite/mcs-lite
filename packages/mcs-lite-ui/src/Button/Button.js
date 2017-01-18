// @flow
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';
import {
  mapBackgroundColorByKind,
  mapColorByKind,
  mapBorderColorByKind,
} from '../utils/colorHelper';

const Button = styled.button`
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  min-width: 80px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  font-size: ${props => props.theme.fontSize.p};
  ${mapBorderColorByKind};
  ${mapBackgroundColorByKind}
  ${mapColorByKind}
`;

Button.defaultProps = {
  theme: defaultTheme,
  kind: 'primary',
};

export default Button;
