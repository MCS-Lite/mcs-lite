import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ButtonClear from './ButtonClear';
import Button from '../Button';
import Input from '../Input';
import P from '../P';

const Container = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Unixtype = styled(P)`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
`;

const ControlNumber = ({ value, onChange, onSubmit, onClear, placeholder, unit, ...otherProps }) =>
  <Container {...otherProps} >
    {unit && <Unixtype color="grayBase">{unit}</Unixtype>}
    <Input type="number" value={value} onChange={onChange} placeholder={placeholder} />

    <ButtonWrapper>
      <ButtonClear onClick={onClear} />
      <Button onClick={onSubmit}>Ok</Button>
    </ButtonWrapper>
  </Container>;

ControlNumber.displayName = 'ControlNumber';
ControlNumber.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  unit: PropTypes.string,
};

export default ControlNumber;
