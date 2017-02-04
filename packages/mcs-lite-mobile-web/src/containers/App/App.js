import React from 'react';
import styled from 'styled-components';
import './style';
import Header from '../../components/Header';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = ({ children }) =>
  <Root>
    <Header />
    <main>
      <MaxWidthCenterWrapper>
        {children}
      </MaxWidthCenterWrapper>
    </main>
  </Root>;

export default App;
