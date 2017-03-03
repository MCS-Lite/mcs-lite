import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import P from '../P';

const Container = styled.div`
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const StyledInput = styled(Input)`
  margin-right: 10px;
`;

const ControlPeriod = ({ value, onChange, onSubmit, placeholder, ...otherProps }) =>
  <Container {...otherProps} >
    <label htmlFor="input"><P color="grayBase">Period</P></label>
    <InputWrapper>
      <StyledInput type="number" value={value} onChange={onChange} placeholder={placeholder} />
      <Button onClick={onSubmit}>Ok</Button>
    </InputWrapper>
  </Container>;

ControlPeriod.displayName = 'ControlPeriod';
ControlPeriod.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ControlPeriod;
