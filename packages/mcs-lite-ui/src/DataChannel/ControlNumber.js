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
  margin-top: 10px;
`;

const BaseComponent = ({ value, onChange, onSubmit, onClear, placeholder, ...otherProps }) =>
  <Container {...otherProps} >
    <Input type="number" value={value} onChange={onChange} placeholder={placeholder} />

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
