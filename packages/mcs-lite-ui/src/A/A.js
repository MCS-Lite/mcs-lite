import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken1, darken2 } from 'mcs-lite-theme';

const A = styled.a`
  color: ${props => props.theme.color[props.color]};
  transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => darken1(props.theme.color[props.color])};
  }

  &:active {
    color: ${props => darken2(props.theme.color[props.color])};
  }
`;

A.displayName = 'A';
A.propTypes = {
  color: PropTypes.string,
};
A.defaultProps = {
  color: 'primary',
};

export default A;
