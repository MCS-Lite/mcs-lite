/* global window, document */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Page, Row, Column, Hidden } from 'hedron';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import Portal from 'react-overlays/lib/Portal';
import Transition from 'react-motion-ui-pack';
import spring from 'react-motion/lib/spring';
import LandingHeader from 'mcs-lite-ui/lib/LandingHeader';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import IconClose from 'mcs-lite-icon/lib/IconClose';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import LOGO from '../../statics/images/logo_mcs_lite_black.svg';
import { LOCALES, getMCSLinkByLocale } from '../../utils/localeHelper';
import LanguageDropdown from './LanguageDropdown';
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

  > * {
    height: ${props => props.theme.height.header};
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: ${props =>
      props.active ? props.theme.color.black : props.theme.color.grayBase};
    transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;

    &:hover {
      color: ${props => props.theme.color.black};
    }

    path {
      fill: currentColor;
    }
  }
`;

const MobileFixedMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, rgba(250, 250, 250, 0.9) 0%, #FFFFFF 100%);
  padding-top: ${props => props.theme.height.header};
  overflow: auto;

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

const renderLinks = (locale, getMessages) => {
  const mcsLink = getMCSLinkByLocale(locale);

  return [
    <a key="gotoMCS" href={mcsLink} target="_blank" rel="noreferrer noopener">
      {getMessages('gotoMCS')}
    </a>,
    <a
      key="resource"
      href={`https://mcs-lite-introduction.netlify.com/${locale}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {getMessages('resource')}
    </a>,
    <a
      key="contact"
      href="mailto:mtkcloudsandbox@mediatek.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      {getMessages('contact')}
    </a>,
  ];
};

class Header extends React.PureComponent {
  state = { isShow: false };
  componentDidMount = () => {
    window.addEventListener('resize', this.onHide);
  };
  componentDidUpdate(prevProps, prevState) {
    // TODO: dont do this
    if (prevState.isShow !== this.state.isShow) {
      document.body.style.overflow = this.state.isShow ? 'hidden' : 'auto';
      document.documentElement.style.overflow = this.state.isShow
        ? 'hidden'
        : 'auto';
    }
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onHide);
    this.onHide.cancel();
  };
  onClick = () => this.setState({ isShow: !this.state.isShow });
  onHide = rafThrottle(() => {
    if (this.state.isShow) this.setState({ isShow: false });
  });
  render() {
    const { locale, getMessages } = this.props;
    const { onClick, onHide } = this;
    const { isShow } = this.state;
    const linkElements = renderLinks(locale, getMessages);

    return (
      <LandingHeader>
        <Page width={`${PAGE_WIDTH}px`}>
          <Row>
            <StyledColumn xs={12}>
              <img src={LOGO} alt="LOGO" />

              {/* Mobile */}
              <Hidden sm md lg>
                <Right>
                  <div onClick={onClick}>
                    <MorphReplace width={24} height={24}>
                      {isShow
                        ? <IconClose key="close" />
                        : <IconMenu key="menu" />}
                    </MorphReplace>
                  </div>
                </Right>
              </Hidden>

              {/* Desktop */}
              <Hidden xs>
                <Right>
                  {linkElements}
                  <LanguageDropdown />
                </Right>
              </Hidden>

              {/* Menu for mobile */}
              {isShow &&
                <Portal>
                  <Transition
                    component={false}
                    appear={{ opacity: 0.8, translateY: -50 }}
                    enter={{
                      opacity: 1,
                      translateY: spring(0, { stiffness: 330, damping: 16 }),
                    }}
                  >
                    <MobileFixedMenu key="MobileFixedMenu">
                      <div>
                        {linkElements}
                        <div>Language</div>
                        {LOCALES.map(({ id, children }) =>
                          <Link key={id} to={`/${id}`} onClick={onHide}>
                            {children}
                          </Link>,
                        )}
                      </div>
                    </MobileFixedMenu>
                  </Transition>
                </Portal>}
            </StyledColumn>
          </Row>
        </Page>
      </LandingHeader>
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
