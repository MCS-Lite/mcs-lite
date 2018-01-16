import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonClear from "./ButtonClear";
import Button from "../Button";
import Input from "../Input";
import P from "../P";

export const Container = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Unixtype = styled(P)`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
`;

const ControlNumber = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder,
  unit,
  ...otherProps
}) => (
  <Container {...otherProps}>
    {unit && <Unixtype color="grayBase">{unit}</Unixtype>}
    <Input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />

    <ButtonWrapper>
      <ButtonClear onClick={onClear} />
      <Button onClick={onSubmit}>Ok</Button>
    </ButtonWrapper>
  </Container>
);

ControlNumber.displayName = "ControlNumber";
ControlNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  unit: PropTypes.string
};

export default ControlNumber;
