import { PropTypes } from 'react';
import styled from 'styled-components';

const P = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.p};
  color: ${props => props.theme.color[props.color]};
  line-height: 1.5;
`;

P.displayName = 'P';

P.propTypes = {
  color: PropTypes.string,
};

P.defaultProps = {
  color: 'black',
};

export default P;
