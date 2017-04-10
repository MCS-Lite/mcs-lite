import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from '../Textarea';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const StyledTextarea = styled(Textarea)`
  height: 100%;
  min-height: 4em;
  flex-grow: 1;
`;

const DisplayString = ({ value, placeholder, ...otherProps }) =>
  <Container {...otherProps} >
    <StyledTextarea value={value} placeholder={placeholder} disabled />
  </Container>;

DisplayString.displayName = 'DisplayString';
DisplayString.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DisplayString;
