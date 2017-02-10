import React, { PropTypes } from 'react';
import styled from 'styled-components';
import withDataChannelCard from './withDataChannelCard';
import P from '../P';
import Heading from '../Heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const StyledP = styled(P)`
  margin-top: 10px;
`;

const BaseComponent = ({ value, unit, ...otherProps }) =>
  <Container {...otherProps} >
    <StyledHeading color="primary">{value}</StyledHeading>
    {unit && <StyledP color="grayBase">{unit}</StyledP>}
  </Container>;

BaseComponent.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
};

export default withDataChannelCard(BaseComponent, 'DisplayUnitValue');
