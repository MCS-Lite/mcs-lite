/* global document, window */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { MenuItem } from 'mcs-lite-ui/lib/Menu';
import Overlay from 'mcs-lite-ui/lib/Overlay';
import raf from 'raf';
import { Page, Row } from 'hedron';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import LOGO from '../../statics/images/logo_mcs_lite_black.svg';
import {
  LOCALES,
  localeMapper,
  getMCSLinkByLocale,
} from '../../utils/localeHelper';
import { DEFAULT_LOCALE } from '../IntlProvider/IntlProvider';
import {
  Container,
  Fixed,
  StyledColumn,
  StyledA,
  StyledP,
  Right,
  StyledMenu,
  StyledIconFold,
  HiddenForPreRenderTrick,
} from './styled-components';

const defaultLocaleMapper = localeMapper(DEFAULT_LOCALE);

// Hint: Extract contenct as PureComponent to avoid re-render while scrolling
class PurePage extends React.PureComponent {
  static propTypes = {
    // props
    getMessages: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = { isShow: false, target: undefined };

  onClickLanguage = () => this.setState({ isShow: !this.state.isShow });
  onHide = () => this.setState({ isShow: false });
  getTarget = node => this.setState({ target: node });

  render() {
    const { router, getMessages: t } = this.props;
    const { onClickLanguage, onHide, getTarget } = this;
    const { isShow, target } = this.state;

    // Remind: fix for netlify redirect to lower case path
    const locale = defaultLocaleMapper(router.params.locale);
    const mcsLink = getMCSLinkByLocale(locale);

    return (
      <Page width={`${PAGE_WIDTH}px`}>
        <Row>
          <StyledColumn xs={12}>
            <div>
              <StyledA><img src={LOGO} alt="LOGO" /></StyledA>
            </div>

            <Right>
              <StyledA href={mcsLink} target="_blank" rel="noreferrer noopener">
                {t('gotoMCS')}
              </StyledA>
              <StyledA
                href={`https://mcs-lite-introduction.netlify.com/${locale}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('resource')}
              </StyledA>
              <StyledA
                href="mailto:mtkcloudsandbox@mediatek.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('contact')}
              </StyledA>
              <StyledA
                ref={getTarget}
                onClick={onClickLanguage}
                data-ga-on="click"
                data-ga-event-category="Language Dropdown Menu"
                data-ga-event-action="click"
              >
                <StyledP>Language</StyledP>
                <StyledIconFold size={16} isShow={isShow} />
              </StyledA>

              {isShow &&
                <Overlay target={target} onClickOutSide={onHide}>
                  <StyledMenu key="menu">
                    {LOCALES.map(({ id, children }) =>
                      <Link key={id} to={`/${id}`} onClick={onHide}>
                        <MenuItem>{children}</MenuItem>
                      </Link>,
                    )}
                  </StyledMenu>
                </Overlay>}
            </Right>

            {/* For Prereder */}
            <HiddenForPreRenderTrick>
              {LOCALES.map(({ id, children }) =>
                <Link key={id} to={`/${id}`}>
                  {children}
                </Link>,
              )}
            </HiddenForPreRenderTrick>

          </StyledColumn>
        </Row>
      </Page>
    );
  }
}

class Header extends React.Component {
  static propTypes = {
    // React-intl I18n
    getMessages: PropTypes.func.isRequired,

    // React-Router HOC
    router: PropTypes.object.isRequired,
  };

  state = { isTop: true };

  componentDidMount = () => window.addEventListener('scroll', this.onScroll);
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
    raf.cancel(this.rafId);
  };
  onScroll = () => {
    this.rafId = raf(() => {
      this.setState({ isTop: document.body.scrollTop < 40 });
    });
  };

  render() {
    const { router, getMessages } = this.props;
    const { isTop } = this.state;

    return (
      <Container>
        <Fixed isTop={isTop}>
          <PurePage router={router} getMessages={getMessages} />
        </Fixed>
      </Container>
    );
  }
}

export default Header;
