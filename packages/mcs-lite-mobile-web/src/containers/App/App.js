import React from 'react';
import styled from 'styled-components';
import './style';
import Header from '../../components/Header';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  height: 300px;
`;

const App = ({ children }) =>
  <Root>
    <Header />
    <Main>
      <MaxWidthCenterWrapper>
        {children}
      </MaxWidthCenterWrapper>
    </Main>
  </Root>;

export default App;
