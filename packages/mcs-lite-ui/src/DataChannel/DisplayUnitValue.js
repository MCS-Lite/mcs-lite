import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import P from '../P';
import Heading from '../Heading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledHeading = styled(Heading)`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const StyledP = styled(P)`
  margin-top: 10px;
`;

const DisplayUnitValue = ({ value, unit, ...otherProps }) => (
  <Container {...otherProps}>
    <StyledHeading color="primary">{value}</StyledHeading>
    {unit && <StyledP color="grayBase">{unit}</StyledP>}
  </Container>
);

DisplayUnitValue.displayName = 'DisplayUnitValue';
DisplayUnitValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
};

export default DisplayUnitValue;
