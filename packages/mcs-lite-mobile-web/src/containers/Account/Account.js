import React, { PropTypes } from 'react';
import { Heading, Small } from 'mcs-lite-ui';
import Helmet from 'react-helmet';
import StyledLink from '../../components/StyledLink';
import {
  Container, Body, StyledLogo, Footer, VersionWrapper, FlatButton,
} from './styled-components';
import updatePathname from '../../utils/updatePathname';
import packageJSON from '../../../package.json';

const VERSION = packageJSON.version;

const Account = ({ userName, email, signout, getMessages: t }) =>
  <Container>
    <Helmet title={t('account')} />
    <Body>
      <StyledLogo />
      <Heading level={4}>{userName}</Heading>
      <Heading level={5}>{email}</Heading>
    </Body>
    <Footer>
      <VersionWrapper color="grayBase">
        <Small>v{VERSION}</Small>
      </VersionWrapper>
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

Account.displayName = 'Account';
Account.propTypes = {
  // Redux State
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  // Redux Action
  signout: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Account;
