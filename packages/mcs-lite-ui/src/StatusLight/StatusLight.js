import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Svg = styled.svg`
  width: 12px;

  > * {
    fill: ${props => props.theme.color[props.color]};
    transition: fill cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  }
`;

const StatusLight = props =>
  <Svg viewBox="0 0 20 20" {...props}>
    <circle cx="10" cy="10" r="10" />
  </Svg>;

StatusLight.displayName = 'StatusLight';
StatusLight.propTypes = {
  color: PropTypes.string,
};
StatusLight.defaultProps = {
  color: 'grayDark',
};

export default StatusLight;
