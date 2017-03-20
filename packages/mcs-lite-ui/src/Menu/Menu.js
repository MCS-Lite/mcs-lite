import styled from 'styled-components';
import Card from '../Card';

const Menu = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  padding: 5px 0;
`;

Menu.displayName = 'Menu';

export default Menu;
