import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
  children: PropTypes.any.isRequired,
};

export default PreventDrag;
