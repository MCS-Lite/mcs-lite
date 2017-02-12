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
  height: 100%;
  padding: 16px;
`;

const Form = styled.form`

  > input + input {
    margin-top: 8px;
  }

  > input:last-child {
    margin-top: 32px;
  }
`;

class Signin extends React.Component {
  state = { account: '', password: '' };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    const { account, password } = this.state;
    this.props.signin({ account, password });
    e.preventDefault();
  }
  render() {
    const { account, password } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <Layout>
        <Logo />
        <StyledHr>歡迎</StyledHr>

        <Form onSubmit={onSubmit}>
          <Input type="email" name="account" placeholder="帳號" value={account} onChange={onChange} required />
          <Input type="password" name="password" placeholder="密碼" value={password} onChange={onChange} required />
          <Button component="input" type="submit" value="登入" block />
        </Form>
      </Layout>
    );
  }
}

export default connect(
  null,
  { signin: actions.signin },
)(Signin);
