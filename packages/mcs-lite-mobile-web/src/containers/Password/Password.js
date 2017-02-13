import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'mcs-lite-ui';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/auth';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import FixedFooter from '../../components/FixedFooter';
import { Container, Label, ButtonWrapper } from './styled-components';

class Password extends React.Component {
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
        <Header title={t('changePassword')} />

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

          <FixedFooter>
            <ButtonWrapper>
              <StyledLink to="/account">
                <Button kind="default" block>{t('cancel')}</Button>
              </StyledLink>
              <Button component="input" type="submit" value={t('save')} block />
            </ButtonWrapper>
          </FixedFooter>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { changePassword: actions.changePassword },
  ),
  withGetMessages(messages, 'Password'),
)(Password);
