import React from 'react';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import IconTimes from 'mcs-lite-icon/lib/IconTimes';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';
import StyledLink from '../StyledLink';
import updatePathname from '../../utils/updatePathname';

const Container = styled(MaxWidthCenterWrapper)`
  height: 100%;
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
    color: ${props => props.theme.color.primary};
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const LayoutDialog = ({ children }) =>
  <Transition
    component={false}
    enter={{ opacity: 1, translateY: 0 }}
    leave={{ opacity: 0, translateY: -40 }}
  >
    <Container key="layoutDialog">
      <Header>
        <StyledLink to={updatePathname('/devices')}><IconTimes /></StyledLink>
      </Header>
      <Main>{children}</Main>
    </Container>
  </Transition>;


export default LayoutDialog;
