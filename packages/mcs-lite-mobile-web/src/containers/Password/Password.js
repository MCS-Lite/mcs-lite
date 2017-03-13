import React, { PropTypes } from 'react';
import { Input, Button, MobileFixedFooter, MobileHeader } from 'mcs-lite-ui';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Container, Label, ButtonWrapper, StyledP } from './styled-components';
import updatePathname from '../../utils/updatePathname';
import validators from './validators';

class Password extends React.Component {
  static propTypes = {
    // Redux Action
    changePassword: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  }
  state = { new1: '', new2: '' };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    this.props.changePassword({
      password: this.state.new2,
      message: this.props.getMessages('success'),
    });
    e.preventDefault();
  }
  render() {
    const { new1, new2 } = this.state;
    const { onChange, onSubmit } = this;
    const { getMessages: t } = this.props;
    const isNew1Error = validators.isLt8(new1);
    const isNew2Error = validators.isNotEqual(new1, new2);

    return (
      <div>
        <Helmet title={t('changePassword')} />
        <MobileHeader.MobileHeader
          title={t('changePassword')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname('/account')}
            >
              <IconMenu />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <form onSubmit={onSubmit}>
          <main>
            <Container>
              <div>
                <Label htmlFor="new1">{t('newPassword.label')}</Label>
                <Input
                  name="new1"
                  value={new1}
                  onChange={onChange}
                  placeholder={t('newPassword.placeholder')}
                  type="password"
                  required
                  kind={isNew1Error ? 'error' : 'primary'}
                />
                {isNew1Error && <StyledP color="error">{t('lengthError')}</StyledP>}
              </div>

              <div>
                <Label htmlFor="new2">{t('newPasswordAgain.label')}</Label>
                <Input
                  name="new2"
                  value={new2}
                  onChange={onChange}
                  placeholder={t('newPasswordAgain.placeholder')}
                  type="password"
                  required
                  kind={isNew2Error ? 'error' : 'primary'}
                />
                {isNew2Error && <StyledP color="error">{t('newPasswordAgain.error')}</StyledP>}
              </div>
            </Container>
          </main>

          <MobileFixedFooter>
            <ButtonWrapper>
              <StyledLink to={updatePathname('/account')}>
                <Button kind="default" block>{t('cancel')}</Button>
              </StyledLink>
              <Button component="input" type="submit" value={t('save')} block />
            </ButtonWrapper>
          </MobileFixedFooter>
        </form>
      </div>
    );
  }
}

export default Password;
