import styled from 'styled-components';
import StyledLink from '../StyledLink';

const HeaderIcon = styled(StyledLink)`
  color: ${props => props.theme.color.white};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 24px;
`;

export default HeaderIcon;
