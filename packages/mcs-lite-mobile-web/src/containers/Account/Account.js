import React from 'react';
import { Heading } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import { actions } from '../../modules/auth';
import StyledLink from '../../components/StyledLink';
import { Container, Body, StyledLogo, Footer, FlatButton } from './styled-components';

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
