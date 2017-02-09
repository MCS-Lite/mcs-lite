import React from 'react';
import styled from 'styled-components';
import { Button, Heading } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import { actions } from '../../modules/auth';
import Logo from '../../components/Logo';
import StyledLink from '../../components/StyledLink';

const FlatButton = styled(Button)`
  border: initial;
  border-radius: initial;
  height: 56px;
  border-top: 1px solid ${props => props.theme.color.white};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 32px;
`;

const Footer = styled.footer`
  width: 100%;
`;

const Account = ({ username, signout }) =>
  <Container>
    <Body>
      <StyledLogo />
      <Heading level={4}>{username}</Heading>
      <Heading level={4}>你好</Heading>
    </Body>
    <Footer>
      <StyledLink to="/devices">
        <FlatButton block>我的裝置</FlatButton>
      </StyledLink>
      <StyledLink to="/password">
        <FlatButton block>更改密碼</FlatButton>
      </StyledLink>
      <FlatButton block onClick={signout}>登出</FlatButton>
    </Footer>
  </Container>;

export default connect(
  ({ auth }) => ({ username: auth.username }),
  { signout: actions.signout },
)(Account);
