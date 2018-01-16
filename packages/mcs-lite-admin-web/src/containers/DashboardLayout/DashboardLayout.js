import React from 'react';
import PropTypes from 'prop-types';
import P from 'mcs-lite-ui/lib/P';
import IconPlay from 'mcs-lite-icon/lib/IconPlay';
import IconStop from 'mcs-lite-icon/lib/IconStop';
import IconPublic from 'mcs-lite-icon/lib/IconPublic';
import IconLogout from 'mcs-lite-icon/lib/IconLogout';
import { updatePathname } from 'mcs-lite-ui/lib/utils/routerHelper';
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
import RestartNotification from '../../components/RestartNotification';

const DashboardLayout = ({
  start,
  stop,
  restart,
  isStarted,
  isNedb,
  isRestartRequired,
  signout,
  children,
  getMessages: t,
}) => (
  <Container>
    <Header>
      <StyledLogo />
      <HeaderItemWrapper>
        {isStarted ? (
          <HeaderItem onClick={() => stop(t('stop.success'))}>
            <IconStop size={18} />
            <P>{t('stop')}</P>
          </HeaderItem>
        ) : (
          <HeaderItem onClick={() => start(t('start.success'))}>
            <IconPlay size={18} />
            <P>{t('start')}</P>
          </HeaderItem>
        )}
      </HeaderItemWrapper>
    </Header>
    <Body>
      <Nav>
        <div>
          <NavItem to={updatePathname('/ip')}>{t('ipConnection')}</NavItem>
          <NavItem to={updatePathname('/system')}>
            {t('systemManagement')}
          </NavItem>
          <NavItem to={updatePathname('/user')}>{t('userManagement')}</NavItem>
          <NavItem to={updatePathname('/data')}>{t('dataManagement')}</NavItem>
        </div>
        <div>
          {/* Admin v2 */}
          {/* <NavItemControl>
            <IconSync size={18} />
            <P>{t('versionCheck')}</P>
          </NavItemControl> */}
          <NavItemControl to={updatePathname('/language')}>
            <IconPublic size={18} />
            <P>Language</P>
          </NavItemControl>
          <NavItemControl onClick={() => signout(t('confirm'))}>
            <IconLogout size={18} />
            <P>{t('signoutService')}</P>
          </NavItemControl>
        </div>
      </Nav>
      <Main>
        {isNedb &&
          isRestartRequired && (
            <RestartNotification
              onClick={() => restart(t('restart.success'))}
            />
          )}
        {children}
      </Main>
    </Body>
  </Container>
);

DashboardLayout.displayName = 'DashboardLayout';
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,

  // Redux State
  isStarted: PropTypes.bool.isRequired,
  isNedb: PropTypes.bool.isRequired,
  isRestartRequired: PropTypes.bool.isRequired,

  // Redux Action
  signout: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default DashboardLayout;
