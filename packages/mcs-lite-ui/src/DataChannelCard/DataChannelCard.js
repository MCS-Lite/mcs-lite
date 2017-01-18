import styled from 'styled-components';
import Card from '../Card';
import defaultTheme from '../defaultTheme';

const DataChannelCard = styled(Card)`
  height: 300px;
  width: 280px;
  padding: 10px 20px;
`;

DataChannelCard.defaultProps = {
  theme: defaultTheme,
};

export default DataChannelCard;
