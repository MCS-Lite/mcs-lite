/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Page, Row, Column, Hidden } from 'hedron';
import styled from 'styled-components';
import raf from 'raf';
import A from 'mcs-lite-ui/lib/A';
import Portal from 'react-overlays/lib/Portal';
import Transition from 'react-motion-ui-pack';
// import MorphReplace from 'react-svg-morph/lib/MorphReplace';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import IconClose from 'mcs-lite-icon/lib/IconClose';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import LOGO from '../../statics/images/logo_mcs_lite_black.svg';
import { LOCALES, getMCSLinkByLocale } from '../../utils/localeHelper';
import FixedContainer, { HEIGHT } from './FixedContainer';
import LanguageDropdown from './LanguageDropdown';
import HeaderNavItem from './HeaderNavItem';
import MorphReplace from './MorphReplace';

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

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  path {
    fill: ${props => props.theme.color.grayBase};
  }
`;

const FixedMobileContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, rgba(250, 250, 250, 0.9) 0%, #FFFFFF 100%);
  padding-top: ${HEIGHT}px;

  > div {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);

    * {
      display: block;
      color: ${props => props.theme.color.grayBase};
      text-align: center;
      padding: 16px 0;
      text-decoration: none;
      transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
    }

    a:hover {
      color: ${props => props.theme.color.primary};
    }

    *:not(a) {
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
      margin: 0 50px;
    }
  }
`;

class Header extends React.PureComponent {
  state = { isShow: false };
  componentDidMount = () => {
    window.addEventListener('resize', this.onClose);
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onClose);
    raf.cancel(this.rafId);
  };
  onClose = () => {
    this.rafId = raf(this.onHide);
  };
  onClick = () => this.setState({ isShow: !this.state.isShow });
  onHide = () => {
    if (this.state.isShow) this.setState({ isShow: false });
  };
  getTarget = node => this.setState({ target: node });

  render() {
    const { locale, getMessages: t } = this.props;
    const { onClick, onHide, getTarget } = this;
    const { isShow } = this.state;

    const mcsLink = getMCSLinkByLocale(locale);

    return (
      <FixedContainer ref={getTarget}>
        <Page width={`${PAGE_WIDTH}px`}>
          <Row>
            <StyledColumn xs={12}>
              <HeaderNavItem><img src={LOGO} alt="LOGO" /></HeaderNavItem>

              {/* Mobile */}
              <Hidden sm md lg>
                <Right>
                  <IconWrapper onClick={onClick}>
                    <MorphReplace width={24} height={24} rotation="none">
                      {/* <IconMenu key="menu" /> */}
                      {/* {this.state.isShow
                        ? <IconClose key="close" />
                        : <IconMenu key="menu" />} */}
                        {this.state.isShow
                          ? <svg height="24" key="close" viewBox="0 0 24 24" width="24">
                              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                          : <svg height="24" key="menu" viewBox="0 0 24 24" width="24">
                              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                            </svg>
                        }
                    </MorphReplace>
                  </IconWrapper>
                </Right>
                {isShow &&
                  <Portal>
                    <Transition
                      component={false}
                      appear={{ opacity: 0.8, marginTop: -50 }}
                      enter={{ opacity: 1, marginTop: 0 }}
                    >
                      <FixedMobileContainer key="FixedMobileContainer">
                        <div>
                          <a
                            href={mcsLink}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {t('gotoMCS')}
                          </a>
                          <a
                            href={`https://mcs-lite-introduction.netlify.com/${locale}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {t('resource')}
                          </a>
                          <a
                            href="mailto:mtkcloudsandbox@mediatek.com"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {t('contact')}
                          </a>

                          <div>Language</div>
                          {LOCALES.map(({ id, children }) =>
                            <Link key={id} to={`/${id}`} onClick={onHide}>
                              {children}
                            </Link>,
                          )}
                        </div>
                      </FixedMobileContainer>
                    </Transition>
                  </Portal>}
              </Hidden>

              {/* Desktop */}
              <Hidden xs>
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
              </Hidden>
            </StyledColumn>
          </Row>
        </Page>
      </FixedContainer>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // React-Router HOC
  locale: PropTypes.string.isRequired,
};

export default Header;
