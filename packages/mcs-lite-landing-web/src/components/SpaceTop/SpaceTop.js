import styled from 'styled-components';
import PropTypes from 'prop-types';

const SpaceTop = styled.div`
  margin-top: ${props => props.height}px;
`;

SpaceTop.displayName = 'SpaceTop';
SpaceTop.propTypes = {
  height: PropTypes.number.isRequired,
};

export default SpaceTop;
