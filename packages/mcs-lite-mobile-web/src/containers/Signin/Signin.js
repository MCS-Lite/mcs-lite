import React from 'react';
import styled from 'styled-components';
import { Button, Hr, Input } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import { actions } from '../../modules/auth';
import Logo from '../../components/Logo';

const StyledHr = styled(Hr)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Layout = styled(MaxWidthCenterWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 16px;

  > input + input {
    margin-top: 8px;
  }

  > button {
    margin-top: 32px;
  }
`;

class Signin extends React.Component {
  state = { account: '', password: '' };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = () => {
    const { account, password } = this.state;
    this.props.signin({ account, password });
  }
  render() {
    const { account, password } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <Layout>
        <Logo />
        <StyledHr>歡迎</StyledHr>
        <Input name="account" placeholder="帳號" value={account} onChange={onChange} />
        <Input name="password" placeholder="密碼" value={password} onChange={onChange} />
        <Button block onClick={onSubmit}>登入</Button>
      </Layout>
    );
  }
}

export default connect(
  null,
  { signin: actions.signin },
)(Signin);
