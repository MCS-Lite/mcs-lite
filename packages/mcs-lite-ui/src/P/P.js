import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import isString from '../utils/isString';

const getBaseComponent = R.ifElse(
  isString,
  R.always('p'),
  R.always('div'),
);

const Component = ({ children, ...otherProps }) =>
  React.createElement(getBaseComponent(children), otherProps, children);

const P = styled(Component)`
  margin: 0;
  font-size: ${props => props.theme.fontSize.p};
  color: ${props => props.theme.color[props.color]};
`;

P.displayName = 'P';
P.propTypes = {
  color: PropTypes.string,
};
P.defaultProps = {
  color: 'black',
};

export default P;
