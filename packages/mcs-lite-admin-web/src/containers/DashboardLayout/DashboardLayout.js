import React from 'react';
import PropTypes from 'prop-types';
import P from 'mcs-lite-ui/lib/P';
import IconPlay from 'mcs-lite-icon/lib/IconPlay';
import IconPause from 'mcs-lite-icon/lib/IconPause';
import IconLogout from 'mcs-lite-icon/lib/IconLogout';
import {
  Container,
  Header,
  HeaderItemWrapper,
  HeaderItem,
  Body,
  Nav,
  NavItem,
  NavItemControl,
  Main,
  StyledLogo,
} from './styled-components';
import updatePathname from '../../utils/updatePathname';

const DashboardLayout = ({
  start,
  stop,
  isStarted,
  signout,
  children,
  getMessages: t,
}) =>
  <Container>
    <Header>
      <StyledLogo />
      <HeaderItemWrapper>
        {isStarted
          ? <HeaderItem onClick={stop}>
              <IconPause size={18} />
              <P>{t('stop')}</P>
            </HeaderItem>
          : <HeaderItem onClick={start}>
              <IconPlay size={18} />
              <P>{t('start')}</P>
            </HeaderItem>}
      </HeaderItemWrapper>
    </Header>
    <Body>
      <Nav>
        <div>
          <NavItem to={updatePathname('/ip')}>{t('ipConnection')}</NavItem>
          <NavItem to={updatePathname('/system')}>
            {t('systemManagement')}
          </NavItem>
        </div>
        <div>
          {/* Admin v2 */}
          {/* <NavItemControl>
            <IconSync size={18} />
            <P>{t('versionCheck')}</P>
          </NavItemControl> */}
          <NavItemControl onClick={() => signout(t('confirm'))}>
            <IconLogout size={18} />
            <P>{t('signoutService')}</P>
          </NavItemControl>
        </div>
      </Nav>
      <Main>
        {children}
      </Main>
    </Body>
  </Container>;

DashboardLayout.displayName = 'DashboardLayout';
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,

  // Redux State
  isStarted: PropTypes.bool.isRequired,

  // Redux Action
  signout: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default DashboardLayout;
