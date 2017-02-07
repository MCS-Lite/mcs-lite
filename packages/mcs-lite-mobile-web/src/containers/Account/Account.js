import React from 'react';
import styled from 'styled-components';
import { Button } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import { actions } from '../../modules/auth';

const FlatButton = styled(Button)`
  border: initial;
  border-radius: initial;
  height: 56px;
  border-top: 1px solid white;
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
  justify-content: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
`;

const Account = () =>
  <Container>
    <Body>
      <div>LOGO</div>
      <div>
        Profile
      </div>
    </Body>
    <Footer>
      <FlatButton block>我的裝置</FlatButton>
      <FlatButton block>更改密碼</FlatButton>
      <FlatButton block>登出</FlatButton>
    </Footer>
  </Container>;

export default connect(
  ({ auth }) => ({ cookie: auth.cookie }),
  { signin: actions.signin },
)(Account);
