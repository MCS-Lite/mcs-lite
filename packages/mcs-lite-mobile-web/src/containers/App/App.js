import React from 'react';
import styled from 'styled-components';
import './style';
import Header from '../../components/Header';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  ${''/* height: 300px; */}
  flex-grow: 1;
  display: flex;
`;

const StyledMaxWidthCenterWrapper = styled(MaxWidthCenterWrapper)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
`;

const App = ({ children }) =>
  <Root>
    <Header />
    <Main>
      <StyledMaxWidthCenterWrapper>
        {children}
      </StyledMaxWidthCenterWrapper>
    </Main>
  </Root>;

export default App;
