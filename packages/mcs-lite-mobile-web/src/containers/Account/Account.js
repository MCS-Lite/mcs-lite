import React from 'react';
import { Heading } from 'mcs-lite-ui';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import { Link } from 'react-router';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/auth';
import { Container, Body, StyledLogo, Footer, FlatButton } from './styled-components';
import updatePathname from '../../utils/updatePathname';

const Account = ({ userName, signout, getMessages: t }) =>
  <Container>
    <Helmet title={t('account')} />
    <Body>
      <StyledLogo />
      <Heading level={4}>{userName}</Heading>
      <Heading level={4}>{t('hello')}</Heading>
    </Body>
    <Footer>
      <Link to={updatePathname('/devices')}>
        <FlatButton block>{t('myTestDevices')}</FlatButton>
      </Link>
      <Link to={updatePathname('/password')}>
        <FlatButton block>{t('changePassword')}</FlatButton>
      </Link>
      <FlatButton block onClick={signout}>{t('signout')}</FlatButton>
    </Footer>
  </Container>;

export default compose(
  connect(
    ({ auth }) => ({ userName: auth.userName }),
    { signout: actions.signout },
  ),
  withGetMessages(messages, 'Account'),
)(Account);
