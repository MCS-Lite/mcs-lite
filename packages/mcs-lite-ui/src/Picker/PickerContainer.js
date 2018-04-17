import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CONTAINER_HEIGHT = 200;
const ITEM_HEIGHT = 40;

export const Container = styled.div`
  position: relative;
  height: ${CONTAINER_HEIGHT}px;
  overflow: hidden;
  cursor: default;
  display: flex;
  background-color: rgba(255, 255, 255, 1);

  > * {
    flex-grow: 1;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  height: ${ITEM_HEIGHT}px;
  left: 0;
  right: 0;
  top: ${CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2}px;
  border-top: 1px solid ${props => props.theme.color.grayBase};
  border-bottom: 1px solid ${props => props.theme.color.grayBase};
  pointer-events: none;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.6)
    ),
    linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
  background-position: top, bottom;
  background-size: 100% 32px;
  background-repeat: no-repeat;
  pointer-events: none;
`;

const PickerContainer = ({ children, ...otherProps }) => (
  <Container {...otherProps}>
    {children}
    <Indicator />
    <Overlay />
  </Container>
);

PickerContainer.displayName = 'PickerContainer';
PickerContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PickerContainer;
