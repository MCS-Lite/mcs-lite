import { PropTypes } from 'react';
import styled from 'styled-components';

const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${props => props.src}");
  background-size: ${props => props.size};
  background-repeat: no-repeat;
  background-position: center center;
`;

Img.displayName = 'Img';
Img.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['cover', 'contain']),
};
Img.defaultProps = {
  size: 'cover',
};

export default Img;
