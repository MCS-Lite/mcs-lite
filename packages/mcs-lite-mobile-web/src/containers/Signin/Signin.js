import React, { PropTypes } from 'react';
import { Button, Input } from 'mcs-lite-ui';
import Helmet from 'react-helmet';
import Logo from '../../components/Logo';
import { ErrorMessage, StyledHr, Layout, Form } from './styled-components';

class Signin extends React.Component {
  static propTypes = {
    // Redux State
    errorMessage: PropTypes.string,

    // Redux Action
    tryEnter: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  }
  state = { email: '', password: '' };
  componentWillMount = () => this.props.tryEnter(); // Hint: When cookieToken avaliable
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { email, password } = this.state;
    const { onChange } = this;
    const { errorMessage, getMessages: t } = this.props;

    return (
      <Layout>
        <Helmet title={t('signin')} />

        <Logo />
        {errorMessage && <ErrorMessage color="error">{errorMessage}</ErrorMessage>}
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

export default Signin;
