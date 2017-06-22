/* global window */

import React from 'react';
import { Link } from 'react-router';
import Overlay from 'mcs-lite-ui/lib/Overlay';
import rafThrottle from 'raf-throttle';
import styled from 'styled-components';
import P from 'mcs-lite-ui/lib/P';
import { Menu, MenuItem } from 'mcs-lite-ui/lib/Menu';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import { LOCALES } from '../../utils/localeHelper';
import HeaderNavItem from './HeaderNavItem';

const StyledP = styled(P)`
  margin-right: 5px;
`;

const StyledMenu = styled(Menu)`
  ${MenuItem} {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

const StyledIconFold = styled(IconFold)`
  transform: rotate(${props => (props.isShow ? -180 : 0)}deg);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

const HiddenForPreRenderTrick = styled.div`
  visibility: hidden;
  display: none;
`;

class LanguageDropdown extends React.PureComponent {
  state = { isShow: false, target: undefined };
  componentDidMount = () => {
    window.addEventListener('scroll', this.onHide);
    window.addEventListener('resize', this.onHide);
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onHide);
    window.removeEventListener('resize', this.onHide);
    this.onHide.cancel();
    this.onOpen.cancel();
  };
  onOpen = rafThrottle(() => {
    if (!this.state.isShow) this.setState({ isShow: true });
  });
  onHide = rafThrottle(() => {
    if (this.state.isShow) this.setState({ isShow: false });
  });
  getTarget = node => this.setState({ target: node });
  render() {
    const { onOpen, onHide, getTarget } = this;
    const { isShow, target } = this.state;

    return (
      <HeaderNavItem
        ref={getTarget}
        onClick={onOpen}
        onMouseOver={onOpen}
        active={isShow}
        data-ga-on="click"
        data-ga-event-category="Language Dropdown Menu"
        data-ga-event-action="click"
      >
        <StyledP>Language</StyledP>
        <StyledIconFold size={18} isShow={isShow} />
        {isShow &&
          <Overlay target={target} onClickOutSide={onHide}>
            <StyledMenu key="menu" onMouseLeave={onHide}>
              {LOCALES.map(({ id, children }) =>
                <Link key={id} to={`/${id}`} onClick={onHide}>
                  <MenuItem>{children}</MenuItem>
                </Link>,
              )}
            </StyledMenu>
          </Overlay>}

        {/* For Prereder */}
        <HiddenForPreRenderTrick>
          {LOCALES.map(({ id, children }) =>
            <Link key={id} to={`/${id}`}>
              {children}
            </Link>,
          )}
        </HiddenForPreRenderTrick>
      </HeaderNavItem>
    );
  }
}

export default LanguageDropdown;
