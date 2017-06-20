import React from 'react';
import PropTypes from 'prop-types';
import { Page, Row, Column } from 'hedron';
import styled from 'styled-components';
import A from 'mcs-lite-ui/lib/A';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import LOGO from '../../statics/images/logo_mcs_lite_black.svg';
import { getMCSLinkByLocale } from '../../utils/localeHelper';
import FixedContainer from './FixedContainer';
import LanguageDropdown from './LanguageDropdown';
import HeaderNavItem from './HeaderNavItem';

const StyledColumn = styled(Column)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;

  > * {
    padding: 0 15px;
  }

  > *:last-child {
    padding-right: 0;
  }
`;

const Header = ({ locale, getMessages: t }) => {
  const mcsLink = getMCSLinkByLocale(locale);

  return (
    <FixedContainer>
      <Page width={`${PAGE_WIDTH}px`}>
        <Row>
          <StyledColumn xs={12}>
            <div>
              <HeaderNavItem><img src={LOGO} alt="LOGO" /></HeaderNavItem>
            </div>

            <Right>
              <A href={mcsLink} target="_blank" rel="noreferrer noopener">
                <HeaderNavItem>
                  {t('gotoMCS')}
                </HeaderNavItem>
              </A>
              <A
                href={`https://mcs-lite-introduction.netlify.com/${locale}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <HeaderNavItem>
                  {t('resource')}
                </HeaderNavItem>
              </A>
              <A
                href="mailto:mtkcloudsandbox@mediatek.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <HeaderNavItem>
                  {t('contact')}
                </HeaderNavItem>
              </A>

              <LanguageDropdown />
            </Right>
          </StyledColumn>
        </Row>
      </Page>
    </FixedContainer>
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
