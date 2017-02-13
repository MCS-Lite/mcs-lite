import React from 'react';
import { Button, Input } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
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
    const { getMessages } = this.props;

    return (
      <Layout>
        <Helmet title={getMessages('Signin.signin')} />

        <Logo />
        <StyledHr>{getMessages('Signin.welcome')}</StyledHr>

        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="account"
            placeholder={getMessages('Signin.account')}
            value={account}
            onChange={onChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder={getMessages('Signin.password')}
            value={password}
            onChange={onChange}
            required
          />
          <Button
            component="input"
            type="submit"
            value={getMessages('Signin.signin')}
            block
          />
        </Form>
      </Layout>
    );
  }
}

export default compose(
  connect(
    null,
    { signin: actions.signin },
  ),
  withGetMessages(messages),
)(Signin);
