import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';

const omitProps = R.omit(['active']);

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, omitProps(otherProps), children);
BaseComponent.displayName = 'BaseComponent';
BaseComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
};
const NavItem = styled(BaseComponent)`
  height: ${props => props.theme.height.header};
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props =>
    props.active ? props.theme.color.black : props.theme.color.grayBase};
  transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;

  &:hover {
    color: ${props => props.theme.color.black};
  }

  path {
    fill: currentColor;
  }
`;
NavItem.displayName = 'NavItem';
NavItem.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
};
NavItem.defaultProps = {
  component: 'div',
  active: false,
};

export default NavItem;
