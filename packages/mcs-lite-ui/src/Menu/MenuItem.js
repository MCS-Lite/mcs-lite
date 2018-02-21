// @flow
import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken1 } from 'mcs-lite-theme';

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, R.omit(['active'])(otherProps), children);
BaseComponent.displayName = 'BaseComponent';
BaseComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
};
const MenuItem = styled(BaseComponent)`
  display: inline-flex;
  align-items: center;
  padding: 0 15px;
  min-width: 80px;
  cursor: pointer;
  box-sizing: border-box;
  color: ${props => props.theme.color.black};
  min-height: ${props => props.theme.height.normal};

  * {
    transition: initial;
  }

  &:hover {
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};

    * {
      color: ${props => props.theme.color.white};
    }
  }

  /* Active */
  &:active {
    background-color: ${props => darken1(props.theme.color.primary)};
    color: ${props => props.theme.color.white};

    * {
      color: ${props => props.theme.color.white};
    }
  }
  ${props =>
    props.active &&
    css`
      background-color: transparent;
      color: ${props.theme.color.primary};

      * {
        color: ${props.theme.color.primary};
      }
    `};
`;

MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
};
MenuItem.defaultProps = {
  component: 'div',
  active: false,
};

export default MenuItem;
