import React, { PropTypes } from 'react';
import styled from 'styled-components';

const H = ({ level, children, ...otherProps }) =>
  React.createElement(`h${level}`, otherProps, children);

const Heading = styled(H)`
  margin: 0;
  font-weight: normal;
  font-size: ${props => props.theme.fontSize[`h${props.level}`]};
  color: ${props => props.theme.color[props.color]};
  line-height: 1.1;
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  color: 'black',
};

export default Heading;
