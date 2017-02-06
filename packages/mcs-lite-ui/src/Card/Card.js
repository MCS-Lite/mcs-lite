import styled from 'styled-components';
import R from 'ramda';

const Card = styled.div`
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: ${R.path(['theme', 'color', 'white'])};
  overflow: hidden;
`;

Card.displayName = 'Card';

export default Card;
