import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: currentColor;
`;

StyledLink.displayName = 'StyledLink';

export default StyledLink;
