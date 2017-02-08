import styled from 'styled-components';
import { Link } from 'react-router';

const HeaderIcon = styled(Link)`
  color: ${props => props.theme.color.white};
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
  font-size: 24px;
`;

export default HeaderIcon;
