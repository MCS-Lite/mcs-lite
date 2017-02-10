import React, { PropTypes } from 'react';
import styled from 'styled-components';
import withDataChannelCard from './withDataChannelCard';
import Textarea from '../Textarea';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-bottom: 10px;
`;

const StyledTextarea = styled(Textarea)`
  height: 100%;
  min-height: 4em;
  flex-grow: 1;
`;

const BaseComponent = ({ value, placeholder, ...otherProps }) =>
  <Container {...otherProps} >
    <StyledTextarea value={value} placeholder={placeholder} disabled />
  </Container>;

BaseComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default withDataChannelCard(BaseComponent, 'DisplayString');
