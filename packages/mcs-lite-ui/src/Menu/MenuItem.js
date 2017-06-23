import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken1 } from 'mcs-lite-theme';

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, otherProps, children);
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
MenuItem.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
MenuItem.defaultProps = {
  component: 'div',
};

export default MenuItem;
