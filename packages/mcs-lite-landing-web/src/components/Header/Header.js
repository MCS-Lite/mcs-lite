import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Page, Row, Column, withBreakpoints } from 'hedron';
import Loadable from 'react-loadable';
import Media from 'react-media';
import styled from 'styled-components';
import LandingHeader from 'mcs-lite-ui/lib/LandingHeader/LandingHeader';
import Nav from 'mcs-lite-ui/lib/LandingHeader/Nav';
import NavItem from 'mcs-lite-ui/lib/LandingHeader/NavItem';
import IconLoading from 'mcs-lite-icon/lib/IconLoading';
import Spin from 'mcs-lite-ui/lib/Spin';
import NavItemDropdown from 'mcs-lite-ui/lib/LandingHeader/NavItemDropdown';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import {
  LOCALES,
  getMCSLinkByLocale,
} from 'mcs-lite-ui/lib/utils/localeHelper';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import logo from '../../statics/images/logo_mcs_lite_black.svg';

const StyledColumn = styled(Column)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const HiddenForPreRenderTrick = styled.div`
  visibility: hidden;
  display: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 28px;
  width: auto;
`;

const DesktopNav = withBreakpoints(styled(Nav)`
  ${'' /* For SEO */}
  display: none;

  @media (min-width: ${props => props.breakpoints.sm}px) {
    display: inherit;
  }
`);

const MobileNav = styled(Nav)`
  ${NavItem} {
    padding-right: 0;
  }
`;

const LoadableNavItemBurger = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "Header.NavItemBurger" */ 'mcs-lite-ui/lib/LandingHeader/NavItemBurger',
    ),
  loading: () => <NavItem><Spin><IconLoading size={24} /></Spin></NavItem>,
});

const Header = ({ locale, getMessages, breakpoints }) => {
  const linkItems = [
    {
      component: 'a',
      key: 'gotoMCS',
      href: getMCSLinkByLocale(locale),
      target: '_blank',
      rel: 'noreferrer noopener',
      children: getMessages('gotoMCS'),
    },
    {
      component: 'a',
      key: 'resource',
      href: `https://mcs-lite-introduction.netlify.com/${locale}`,
      target: '_blank',
      rel: 'noreferrer noopener',
      children: getMessages('resource'),
    },
    {
      component: 'a',
      key: 'contact',
      href: 'mailto:mtkcloudsandbox@mediatek.com',
      target: '_blank',
      rel: 'noreferrer noopener',
      children: getMessages('contact'),
    },
  ];
  const languageItems = LOCALES.map(({ id, children }) => ({
    key: id,
    to: `/${id}`,
    component: StyledLink,
    children,
  }));

  return (
    <LandingHeader>
      <Page width={`${PAGE_WIDTH}px`}>
        <Row>
          <StyledColumn xs={12}>
            {/* 0. Left - LOGO */}
            <Nav>
              <NavItem>
                <LogoImage src={logo} alt="logo" />
              </NavItem>
            </Nav>

            {/* 1. Right - Nav */}
            <Media query={{ minWidth: breakpoints.sm }}>
              {matches =>
                matches
                  ? // Desktop
                    <DesktopNav>
                      {linkItems.map(e => <NavItem {...e} />)}
                      <NavItemDropdown
                        items={languageItems}
                        data-ga-on="click"
                        data-ga-event-category="Language NavItemDropdown menu"
                        data-ga-event-action="click"
                      >
                        Language
                      </NavItemDropdown>
                    </DesktopNav>
                  : // Mobile
                    <MobileNav>
                      <LazyloadOnce>
                        <LoadableNavItemBurger
                          items={[
                            ...linkItems,
                            {
                              key: 'Language',
                              children: 'Language',
                              disabled: true,
                            },
                            ...languageItems,
                          ]}
                          data-ga-on="click"
                          data-ga-event-category="Mobile NavItemBurger menu"
                          data-ga-event-action="click"
                        />
                      </LazyloadOnce>
                    </MobileNav>}
            </Media>

            {/* 3. Hidden -For Prereder */}
            <HiddenForPreRenderTrick>
              {LOCALES.map(({ id, children }) =>
                <a key={id} href={`/${id}`}>
                  {children}
                </a>,
              )}
            </HiddenForPreRenderTrick>
          </StyledColumn>
        </Row>
      </Page>
    </LandingHeader>
  );
};

Header.displayName = 'Header';
Header.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // React-Router HOC
  locale: PropTypes.string.isRequired,

  // withBreakpoints HOC
  breakpoints: PropTypes.shape({
    sm: PropTypes.number.isRequired,
  }).isRequired,
};

export default Header;
