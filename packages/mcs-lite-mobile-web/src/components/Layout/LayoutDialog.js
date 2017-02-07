import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';
import Transition from 'react-motion-ui-pack';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';

const Container = styled(MaxWidthCenterWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
`;

const goBack = () => browserHistory.goBack();

const LayoutDialog = ({ children }) =>
  <Transition
    component={false}
    enter={{
      opacity: 1,
      translateY: 0,
    }}
    leave={{
      opacity: 0,
      translateY: -80,
    }}
  >
    <Container key="layoutDialog">
      <header onClick={goBack}>X</header>
      <Main>{children}</Main>
    </Container>
  </Transition>;


export default LayoutDialog;
