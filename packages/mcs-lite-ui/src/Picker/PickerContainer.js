import React from 'react';
import styled from 'styled-components';

const CONTAINER_HEIGHT = 200;
const ITEM_HEIGHT = 40;

const Container = styled.div`
  position: relative;
  height: ${CONTAINER_HEIGHT}px;
  overflow: hidden;
  border: 1px solid black;
  cursor: default;
  display: flex;

  > * {
    flex-grow: 1;
  }
`;

const Indicator = styled.div`
  position: absolute;
  height: ${ITEM_HEIGHT}px;
  left: 0;
  right: 0;
  top: ${(CONTAINER_HEIGHT / 2) - (ITEM_HEIGHT / 2)}px;
  border-top: 1px solid ${props => props.theme.color.grayDark};
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
  pointer-events: none;
`;

const PickerContainer = ({ children }) =>
  <Container>
    {children}
    <Indicator />
  </Container>;

export default PickerContainer;
