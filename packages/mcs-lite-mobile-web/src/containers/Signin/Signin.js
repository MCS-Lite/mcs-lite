import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'mcs-lite-ui';
import { Signin as SIGNIN_URL } from 'mcs-lite-fetch-rx';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import Logo from '../../components/Logo';
import { StyledHr, Layout, Form } from './styled-components';
import { actions as authActions } from '../../modules/auth';

class Signin extends React.Component {
  state = { email: '', password: '' };
  componentWillMount = () => this.props.tryEnter(); // Hint: When cookieToken avaliable
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

        <Form method="post" action={SIGNIN_URL}>
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
  connect(
    null,
    {
      tryEnter: authActions.tryEnter,
    },
  ),
  withGetMessages(messages, 'Signin'),
)(Signin);
