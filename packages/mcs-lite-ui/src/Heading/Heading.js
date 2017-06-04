import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H = ({ level, children, ...otherProps }) =>
  React.createElement(`h${level}`, otherProps, children);
H.displayName = 'H';
H.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
};

const Heading = styled(H)`
  margin: 0;
  font-weight: normal;
  font-size: ${props => props.theme.fontSize[`h${props.level}`]};
  color: ${props =>
    props.color ? props.theme.color[props.color] : 'currentColor'};
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
