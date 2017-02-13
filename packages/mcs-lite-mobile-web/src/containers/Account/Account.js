import React from 'react';
import { Heading } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/auth';
import StyledLink from '../../components/StyledLink';
import { Container, Body, StyledLogo, Footer, FlatButton } from './styled-components';
import updatePathname from '../../utils/updatePathname';

const Account = ({ username, signout, getMessages: t }) =>
  <Container>
    <Helmet title={t('account')} />
    <Body>
      <StyledLogo />
      <Heading level={4}>{username}</Heading>
      <Heading level={4}>{t('hello')}</Heading>
    </Body>
    <Footer>
      <StyledLink to={updatePathname('/devices')}>
        <FlatButton block>{t('myTestDevices')}</FlatButton>
      </StyledLink>
      <StyledLink to={updatePathname('/password')}>
        <FlatButton block>{t('changePassword')}</FlatButton>
      </StyledLink>
      <FlatButton block onClick={signout}>{t('signout')}</FlatButton>
    </Footer>
  </Container>;

export default compose(
  connect(
    ({ auth }) => ({ username: auth.username }),
    { signout: actions.signout },
  ),
  withGetMessages(messages, 'Account'),
)(Account);
