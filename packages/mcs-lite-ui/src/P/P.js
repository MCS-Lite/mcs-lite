import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import R from 'ramda';
import isString from '../utils/isString';

const getBaseComponent = R.ifElse(isString, R.always('p'), R.always('div'));

const Component = ({ children, ...otherProps }) =>
  React.createElement(getBaseComponent(children), otherProps, children);
Component.displayName = 'Component';
Component.propTypes = {
  children: PropTypes.node.isRequired,
};

const P = styled(Component)`
  margin: 0;
  font-size: ${props => props.theme.fontSize.p};

  ${props =>
    props.color &&
    css`
      color: ${props.theme.color[props.color]};
    `};
`;

P.displayName = 'P';
P.propTypes = {
  color: PropTypes.string,
};

export default P;
