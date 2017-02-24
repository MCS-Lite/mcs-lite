import React, { PropTypes } from 'react';
import { Heading } from 'mcs-lite-ui';
import Helmet from 'react-helmet';
import StyledLink from '../../components/StyledLink';
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
      <StyledLink to={updatePathname('/devices')}>
        <FlatButton block>{t('myTestDevices')}</FlatButton>
      </StyledLink>
      <StyledLink to={updatePathname('/password')}>
        <FlatButton block>{t('changePassword')}</FlatButton>
      </StyledLink>
      <FlatButton block onClick={() => signout(t('confirm'))}>
        {t('signout')}
      </FlatButton>
    </Footer>
  </Container>;

Account.propTypes = {
  userName: PropTypes.string,
  signout: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
};

export default Account;
