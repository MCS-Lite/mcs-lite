import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { darken1, darken2, darken3 } from 'mcs-lite-theme';
import * as propMappers from './propMappers';

const omitProps = R.omit(['block', 'kind', 'square', 'round', 'size', 'status']);

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, omitProps(otherProps), children);

const Button = styled(BaseComponent)`
  border-width: 1px;
  border-style: solid;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  line-height: 0;
  border-color: ${props => darken3(props.theme.color[props.kind])};
  background-color: ${props => props.theme.color[props.kind]};

  &:hover {
    background-color: ${props => darken1(props.theme.color[props.kind])};
  }

  &:active {
    background-color: ${props => darken2(props.theme.color[props.kind])};
  }

  color: ${propMappers.color};
  border-radius: ${propMappers.borderRadius};
  width: ${propMappers.width};
  min-width: ${propMappers.minWidth};
  height: ${props => props.theme.height[props.size]};
  padding: ${propMappers.padding};
  font-size: ${propMappers.fontSize};
`;

Button.displayName = 'Button';

Button.propTypes = {
  kind: PropTypes.string,
  block: PropTypes.bool,
  component: PropTypes.any,
  square: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal']),
};

Button.defaultProps = {
  kind: 'primary',
  block: false,
  component: 'button',
  square: false,
  round: false,
  size: 'normal',
};

export default Button;
