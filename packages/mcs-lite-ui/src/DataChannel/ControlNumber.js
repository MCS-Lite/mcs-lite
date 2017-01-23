import React from 'react';
import styled from 'styled-components';
import withDataChannelCard from './withDataChannelCard';
import Button from '../Button';
import Input from '../Input';

const Container = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const BaseComponent = ({ value, onChange, onSubmit, ...otherProps }) =>
  <Container {...otherProps} >
    <Input type="number" value={value} onChange={onChange} />

    <ButtonWrapper>
      Clear
      <Button onClick={onSubmit}>Ok</Button>
    </ButtonWrapper>
  </Container>;

// BaseComponent.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
// };

export default withDataChannelCard(BaseComponent, 'ControlNumber');
