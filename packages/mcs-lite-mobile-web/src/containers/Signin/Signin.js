import React from 'react';
import { Button, Input } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { actions } from '../../modules/auth';
import Logo from '../../components/Logo';
import { StyledHr, Layout, Form } from './styled-components';

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
        <Helmet title="Signin" />

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
