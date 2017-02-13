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
    const { getMessages } = this.props;

    return (
      <div>
        <Helmet title={getMessages('Password.changePassword')} />
        <Header title={getMessages('Password.changePassword')} />

        <form onSubmit={onSubmit}>
          <main>
            <Container>
              <div>
                <Label htmlFor="old">{getMessages('Password.enterOldPassword')}</Label>
                <Input
                  id="old"
                  value={old}
                  onChange={onChange}
                  placeholder={getMessages('Password.enterOldPassword')}
                  type="password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="new1">{getMessages('Password.enterNewPassword')}</Label>
                <Input
                  id="new1"
                  value={new1}
                  onChange={onChange}
                  placeholder={getMessages('Password.enterNewPassword')}
                  type="password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="new2">{getMessages('Password.enterNewPasswordAgain')}</Label>
                <Input
                  id="new2"
                  value={new2}
                  onChange={onChange}
                  placeholder={getMessages('Password.enterNewPasswordAgain')}
                  type="password"
                  required
                />
              </div>
            </Container>
          </main>

          <FixedFooter>
            <ButtonWrapper>
              <StyledLink to="/account">
                <Button kind="default" block>{getMessages('Password.cancel')}</Button>
              </StyledLink>
              <Button component="input" type="submit" value={getMessages('Password.save')} block />
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
  withGetMessages(messages),
)(Password);
