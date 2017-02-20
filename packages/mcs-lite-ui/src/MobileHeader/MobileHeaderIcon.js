import React, { PropTypes } from 'react';
import styled from 'styled-components';

const BaseComponent = ({ component, children, ...otherProps }) =>
  React.createElement(component, otherProps, children);

const MobileHeaderIcon = styled(BaseComponent)`
  color: ${props => props.theme.color.white};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 24px;
  transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  cursor: pointer;
`;

MobileHeaderIcon.displayName = 'MobileHeaderIcon';
MobileHeaderIcon.propTypes = {
  component: PropTypes.any,
};
MobileHeaderIcon.defaultProps = {
  component: 'a',
};

export default MobileHeaderIcon;
