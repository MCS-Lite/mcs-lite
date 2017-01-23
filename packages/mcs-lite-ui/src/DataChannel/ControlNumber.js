import React from 'react';
import styled from 'styled-components';
import withDataChannelCard from './withDataChannelCard';
import Button from '../Button';
import Input from '../Input';
import A from '../A';
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

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  padding-right: 40px;
`;

const Unixtype = styled(P)`
  position: absolute;
  width: 100%;
  padding-right: 10px;
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${props => props.theme.base.inputHeight};
`;

const BaseComponent = ({ value, onChange, onSubmit, onClear, placeholder, unit, ...otherProps }) =>
  <Container {...otherProps} >
    <InputWrapper>
      {unit && <Unixtype color="grayBase">{unit}</Unixtype>}
      <StyledInput type="number" value={value} onChange={onChange} placeholder={placeholder} />
    </InputWrapper>

    <ButtonWrapper>
      <P><A onClick={onClear}>Clear</A></P>
      <Button onClick={onSubmit}>Ok</Button>
    </ButtonWrapper>
  </Container>;

// BaseComponent.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
// };

export default withDataChannelCard(BaseComponent, 'ControlNumber');
