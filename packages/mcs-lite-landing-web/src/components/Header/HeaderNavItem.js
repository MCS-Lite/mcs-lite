import styled from 'styled-components';
import { HEIGHT } from './FixedContainer';

const HeaderNavItem = styled.div`
  height: ${HEIGHT}px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color.black};
`;

export default HeaderNavItem;
