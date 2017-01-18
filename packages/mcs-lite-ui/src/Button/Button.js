// @flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { darken1 } from '../utils/darken';
import defaultTheme from '../defaultTheme';

const Button = styled.button`
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  min-width: 80px;
  box-sizing: border-box;

  background: ${props => props.theme.backgroundColor[props.kind]};
  border: 2px solid ${props => darken1(props.theme.backgroundColor[props.kind])};
  color: ${props => props.theme.color[props.kind]};
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'cancel']),
};

Button.defaultProps = {
  theme: defaultTheme,
  kind: 'primary',
};

export default Button;
