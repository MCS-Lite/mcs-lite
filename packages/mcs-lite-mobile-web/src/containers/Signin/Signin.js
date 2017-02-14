import React from 'react';
import { Button, Input } from 'mcs-lite-ui';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import Logo from '../../components/Logo';
import { StyledHr, Layout, Form } from './styled-components';

class Signin extends React.Component {
  state = { email: '', password: '' };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { email, password } = this.state;
    const { onChange } = this;
    const { getMessages: t } = this.props;

    return (
      <Layout>
        <Helmet title={t('signin')} />

        <Logo />
        <StyledHr>{t('welcome')}</StyledHr>

        <Form method="post" action="/oauth/login/mobile">
          <Input
            type="email"
            name="email"
            placeholder={t('email')}
            value={email}
            onChange={onChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder={t('password')}
            value={password}
            onChange={onChange}
            required
          />
          <Button component="input" type="submit" value={t('signin')} block />
        </Form>
      </Layout>
    );
  }
}

export default compose(
  withGetMessages(messages, 'Signin'),
)(Signin);
