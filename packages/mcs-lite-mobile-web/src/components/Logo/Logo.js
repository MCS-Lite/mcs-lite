import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoPath from '../../statics/images/logo_mcs_lite_black.svg';

const Logo = styled.img`
  margin: 16px;
  user-select: none;
  height: 50px;
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
