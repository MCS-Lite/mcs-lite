// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';
import * as propMappers from './propMappers';

const omitProps = R.omit([
  'block',
  'kind',
  'square',
  'round',
  'size',
  'status',
  'active',
  'disabled',
]);

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, omitProps(otherProps), children);
BaseComponent.displayName = 'BaseComponent';
BaseComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  children: PropTypes.node, // Remind: There is not a children for Input tag.
};

const Button = styled(BaseComponent)`
  border-width: 1px;
  border-style: solid;
  outline: none;
  box-sizing: border-box;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  line-height: 0;
  cursor: ${props => (props.disabled ? 'not-allowed;' : 'pointer')};

  &:hover {
    background-color: ${propMappers.hoverBackgroundColor};
  }

  &:active {
    background-color: ${propMappers.activeBackgroundColor};
  }

  background-color: ${propMappers.backgroundColor};
  color: ${propMappers.color};
  border-radius: ${propMappers.borderRadius};
  width: ${propMappers.width};
  min-width: ${propMappers.minWidth};
  height: ${props => props.theme.height[props.size]};
  padding: ${propMappers.padding};
  font-size: ${propMappers.fontSize};
  border-color: ${propMappers.borderColor};
`;

Button.displayName = 'Button';

Button.propTypes = {
  kind: PropTypes.string,
  block: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  square: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  kind: 'primary',
  block: false,
  component: 'button',
  square: false,
  round: false,
  size: 'normal',
  active: false,
  disabled: false,
};

export default Button;
