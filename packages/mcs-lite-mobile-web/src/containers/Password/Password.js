import React, { PropTypes } from 'react';
import { Input, Button, MobileFixedFooter, MobileHeader } from 'mcs-lite-ui';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import StyledLink from '../../components/StyledLink';
import { Container, Label, ButtonWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

class Password extends React.Component {
  static propTypes = {
    getMessages: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
  }
  state = { old: '', new1: '', new2: '' };
  onChange = e => this.setState({ [e.target.id]: e.target.value });
  onSubmit = (e) => {
    this.props.changePassword(this.state);
    e.preventDefault();
  }
  render() {
    const { old, new1, new2 } = this.state;
    const { onChange, onSubmit } = this;
    const { getMessages: t } = this.props;

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
                <Label htmlFor="old">{t('enterOldPassword')}</Label>
                <Input
                  id="old"
                  value={old}
                  onChange={onChange}
                  placeholder={t('enterOldPassword')}
                  type="password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="new1">{t('enterNewPassword')}</Label>
                <Input
                  id="new1"
                  value={new1}
                  onChange={onChange}
                  placeholder={t('enterNewPassword')}
                  type="password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="new2">{t('enterNewPasswordAgain')}</Label>
                <Input
                  id="new2"
                  value={new2}
                  onChange={onChange}
                  placeholder={t('enterNewPasswordAgain')}
                  type="password"
                  required
                />
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
