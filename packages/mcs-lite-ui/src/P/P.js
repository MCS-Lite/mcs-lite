import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Component = ({ component, children, ...otherProps }) =>
  React.createElement(component, otherProps, children);

const P = styled(Component)`
  margin: 0;
  font-size: ${props => props.theme.fontSize.p};
  color: ${props => props.theme.color[props.color]};
  line-height: 1.5;
`;

P.displayName = 'P';

P.propTypes = {
  color: PropTypes.string,
  component: PropTypes.any,
};

P.defaultProps = {
  color: 'black',
  component: 'p',
};

export default P;
