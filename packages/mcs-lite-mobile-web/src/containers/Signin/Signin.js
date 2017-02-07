import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import { actions } from '../../modules/auth';

const Layout = styled(MaxWidthCenterWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 16px;
`;

const Signin = ({ signin, cookie }) =>
  <Layout>
    <div>LOGO</div>
    {cookie}
    <Input placeholder="placeholder" />
    <Input placeholder="placeholder" />
    <Button block onClick={signin}>Sign in</Button>
  </Layout>;

export default connect(
  ({ auth }) => ({ cookie: auth.cookie }),
  { signin: actions.signin },
)(Signin);
