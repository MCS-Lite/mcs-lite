import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Page, Row, Column, Hidden } from 'hedron';
import Loadable from 'react-loadable';
import { lazyload } from 'react-lazyload';
import styled from 'styled-components';
import LandingHeader from 'mcs-lite-ui/lib/LandingHeader/LandingHeader';
import Nav from 'mcs-lite-ui/lib/LandingHeader/Nav';
import NavItem from 'mcs-lite-ui/lib/LandingHeader/NavItem';
import NavItemDropdown from 'mcs-lite-ui/lib/LandingHeader/NavItemDropdown';
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

const LoadableNavItemBurger = Loadable({
  loader: () => import('mcs-lite-ui/lib/LandingHeader/NavItemBurger'),
  loading: () => null,
});
const LazyLoadableNavItemBurger = lazyload({
  once: true,
  throttle: 200,
  offset: 500,
})(props => <LoadableNavItemBurger {...props} />);

const Header = ({ locale, getMessages }) => {
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

            {/* 1. Right - For Mobile */}
            <Hidden sm md lg>
              <Nav>
                <LazyLoadableNavItemBurger
                  items={[
                    ...linkItems,
                    { key: 'Language', children: 'Language', disabled: true },
                    ...languageItems,
                  ]}
                  data-ga-on="click"
                  data-ga-event-category="Mobile NavItemBurger menu"
                  data-ga-event-action="click"
                />
              </Nav>
            </Hidden>

            {/* 2. Right - For Desktop */}
            <Hidden xs>
              <Nav>
                {linkItems.map(e => <NavItem {...e} />)}
                <NavItemDropdown
                  items={languageItems}
                  data-ga-on="click"
                  data-ga-event-category="Language NavItemDropdown menu"
                  data-ga-event-action="click"
                >
                  Language
                </NavItemDropdown>
              </Nav>
            </Hidden>

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
};

export default Header;
