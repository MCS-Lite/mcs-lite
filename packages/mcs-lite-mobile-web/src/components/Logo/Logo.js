import { PropTypes } from 'react';
import styled from 'styled-components';
import logoPath from '../../statics/images/logo.svg';

const Logo = styled.img`
  margin: 16px;
  user-select: none;
`;

Logo.displayName = 'Logo';
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
Logo.defaultProps = {
  src: logoPath,
  alt: 'MCS Lite Logo',
};

export default Logo;
