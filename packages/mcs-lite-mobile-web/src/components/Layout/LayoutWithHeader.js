import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutWithHeader = ({ children }) => {
  console.log(children)
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default LayoutWithHeader;
