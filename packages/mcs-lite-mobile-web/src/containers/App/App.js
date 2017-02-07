import React from 'react';
import styled from 'styled-components';
import './style';
import Header from '../../components/Header';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = ({ children }) =>
  <Root>
    <Header />
    <main>{children}</main>
  </Root>;

export default App;
