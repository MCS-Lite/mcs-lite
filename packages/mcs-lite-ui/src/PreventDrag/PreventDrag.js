import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  -webkit-user-drag: none;
`;

const preventDefault = e => e.preventDefault();

const PreventDrag = ({ children }) => (
  <Container
    onDrop={preventDefault}
    onDragStart={preventDefault}
    onMouseMove={preventDefault}
    onMouseOut={preventDefault}
    onMouseDown={preventDefault} // for Safari
  >
    {children}
  </Container>
);

PreventDrag.displayName = 'PreventDrag';
PreventDrag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreventDrag;
