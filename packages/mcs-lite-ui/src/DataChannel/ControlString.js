import React, { PropTypes } from 'react';
import styled from 'styled-components';
import withDataChannelCard from '../HOC/withDataChannelCard';
import Button from '../Button';
import Textarea from '../Textarea';
import A from '../A';
import P from '../P';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 5px;
  flex-shrink: 0;
`;

const StyledTextarea = styled(Textarea)`
  height: 100%;
  flex-grow: 1;
`;

const BaseComponent = ({ value, onChange, onSubmit, onClear, placeholder, ...otherProps }) =>
  <Container {...otherProps} >
    <StyledTextarea value={value} onChange={onChange} placeholder={placeholder} />

    <ButtonWrapper>
      <P><A onClick={onClear}>Clear</A></P>
      <Button onClick={onSubmit}>Ok</Button>
    </ButtonWrapper>
  </Container>;

BaseComponent.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
};

export default withDataChannelCard(BaseComponent, 'ControlString');
