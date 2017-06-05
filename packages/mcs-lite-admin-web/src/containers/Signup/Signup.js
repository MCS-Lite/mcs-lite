import PropTypes from 'prop-types';
import React from 'react';
import Button from 'mcs-lite-ui/lib/Button';
import Input from 'mcs-lite-ui/lib/Input';
import Helmet from 'react-helmet';
import {
  StyledLogo,
  ErrorMessage,
  StyledHr,
  Layout,
  Form,
} from '../Signin/styled-components';
import validators from './validators';

class Signup extends React.Component {
  static propTypes = {
    // Redux State
    errorMessage: PropTypes.string,

    // Redux Action
    tryEnter: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };
  state = { userName: '', email: '', password: '', password2: '' };
  componentWillMount = () => this.props.tryEnter(); // Hint: When cookieToken avaliable
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { userName, email, password, password2 } = this.state;
    const { onChange } = this;
    const { errorMessage, getMessages: t } = this.props;
    const isPasswordError = validators.isLt8(password);
    const isPassword2Error = validators.isNotEqual(password, password2);

    return (
      <Layout>
        <Helmet><title>{t('signup')}</title></Helmet>

        <StyledLogo />
        <ErrorMessage color="error">
          {errorMessage}
          {isPasswordError && t('lengthError')}
          {isPassword2Error && t('password2.error')}
        </ErrorMessage>
        <StyledHr>{t('createAdminAccount')}</StyledHr>

        <Form method="post" action="/api/admin">
          <Input
            type="text"
            name="userName"
            placeholder={t('userName')}
            value={userName}
            onChange={onChange}
            required
          />
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
            kind={isPasswordError ? 'error' : 'primary'}
          />
          <Input
            type="password"
            name="password2"
            placeholder={t('password2')}
            value={password2}
            onChange={onChange}
            required
            kind={isPassword2Error ? 'error' : 'primary'}
          />
          <Button component="input" type="submit" value={t('signup')} block />
        </Form>
      </Layout>
    );
  }
}

export default Signup;
