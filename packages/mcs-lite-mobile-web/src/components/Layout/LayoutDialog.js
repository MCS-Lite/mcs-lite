import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';
import Transition from 'react-motion-ui-pack';
import { A } from 'mcs-lite-ui';
import IconEllipsisV from 'mcs-lite-icon/lib/IconEllipsisV';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';

const Container = styled(MaxWidthCenterWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  > * {
    font-size: 24px;
    padding: 16px;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
      translateY: -40,
    }}
  >
    <Container key="layoutDialog">
      <Header>
        <A color="primary" onClick={goBack}><IconEllipsisV /></A>
      </Header>
      <Main>{children}</Main>
    </Container>
  </Transition>;


export default LayoutDialog;
