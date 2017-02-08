import styled from 'styled-components';
import logoPath from '../../statics/iamges/logo.svg';

const Logo = styled.img`
  margin: 16px;
  user-select: none;
`;

Logo.defaultProps = {
  src: logoPath,
  alt: 'MCS Lite Logo',
};

export default Logo;
