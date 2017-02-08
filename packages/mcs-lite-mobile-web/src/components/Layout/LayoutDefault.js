import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutDefault = ({ children }) =>
  <Container>
    {children}
  </Container>;

export default LayoutDefault;
