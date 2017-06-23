import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import R from 'ramda';
import { Page, Row, Column, Hidden } from 'hedron';
import styled from 'styled-components';
import {
  LandingHeader,
  Nav,
  NavItem,
  NavItemDropdown,
  NavItemBurger,
} from 'mcs-lite-ui/lib/LandingHeader';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import LOGO from '../../statics/images/logo_mcs_lite_black.svg';
import { LOCALES, getMCSLinkByLocale } from '../../utils/localeHelper';

const StyledColumn = styled(Column)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const renderLinks = R.memoize((locale, getMessages) => {
  const mcsLink = getMCSLinkByLocale(locale);

  return [
    {
      component: 'a',
      key: 'gotoMCS',
      href: mcsLink,
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
});

const HiddenForPreRenderTrick = styled.div`
  visibility: hidden;
  display: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ locale, getMessages }) => {
  const links = renderLinks(locale, getMessages);
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
            <img src={LOGO} alt="LOGO" />

            {/* Mobile */}
            <Hidden sm md lg>
              <Nav>
                <NavItemBurger
                  items={[
                    ...links,
                    { key: 'Language', children: 'Language', disabled: true },
                    ...languageItems,
                  ]}
                />
              </Nav>
            </Hidden>

            {/* Desktop */}
            <Hidden xs>
              <Nav>
                {links.map(e => <NavItem {...e} />)}
                <NavItemDropdown items={languageItems}>
                  Language
                </NavItemDropdown>
              </Nav>

              {/* For Prereder */}
              <HiddenForPreRenderTrick>
                {LOCALES.map(({ id, children }) =>
                  <Link key={id} to={`/${id}`}>
                    {children}
                  </Link>,
                )}
              </HiddenForPreRenderTrick>
            </Hidden>
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
