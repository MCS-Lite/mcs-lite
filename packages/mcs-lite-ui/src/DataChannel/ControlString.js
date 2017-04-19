import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonClear from './ButtonClear';
import Textarea from '../Textarea';
import Button from '../Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  flex-shrink: 0;
`;

export const StyledTextarea = styled(Textarea)`
  height: 100%;
  min-height: 4em;
  flex-grow: 1;
`;

const ControlString = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder,
  ...otherProps
}) => (
  <Container {...otherProps}>
    <StyledTextarea
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

ControlString.displayName = 'ControlString';
ControlString.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ControlString;
