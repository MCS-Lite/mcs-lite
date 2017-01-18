// @flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { darken1, darken2, darken3 } from '../utils/darken';
import defaultTheme from '../defaultTheme';

const Button = styled.button`
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.p};
  min-width: 80px;
  box-sizing: border-box;

  border: 1px solid ${props => darken3(props.theme.backgroundColor[props.kind])};
  color: ${props => props.theme.color[props.kind]};

  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  background-color: ${props => props.theme.backgroundColor[props.kind]};

  &:hover {
    background-color: ${props => darken1(props.theme.backgroundColor[props.kind])};
  }

  &:active {
    background-color: ${props => darken2(props.theme.backgroundColor[props.kind])};
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'cancel']),
};

Button.defaultProps = {
  theme: defaultTheme,
  kind: 'primary',
};

export default Button;
