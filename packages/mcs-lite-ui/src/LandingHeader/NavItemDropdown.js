/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import Rotate from '../Rotate';
import Overlay from '../Overlay';
import P from '../P';
import { Menu, MenuItem } from '../Menu';
import NavItem from './NavItem';

export const StyledP = styled(P)`
  margin-right: 5px;
`;

export const HandleHideMenuItem = ({ onHide, onClick, ...otherProps }) => (
  <MenuItem
    {...otherProps}
    onClick={e => {
      if (onClick) onClick(e);
      onHide(e);
    }}
  />
);
HandleHideMenuItem.displayName = 'HandleHideMenuItem';
HandleHideMenuItem.propTypes = {
  onHide: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

class NavItemDropdown extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,

    // MenuItem
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        children: PropTypes.node.isRequired,
      }),
    ).isRequired,
  };
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
    const { children, items, ...otherProps } = this.props;

    return (
      <NavItem
        ref={getTarget}
        onClick={onOpen}
        onMouseOver={onOpen}
        active={isShow}
        {...otherProps}
      >
        <StyledP>{children}</StyledP>
        <Rotate active={isShow}>
          <IconFold size={18} />
        </Rotate>

        {/* Portal */}
        {isShow && (
          <Overlay target={target} onClickOutSide={onHide}>
            <Menu key="menu" onClick={onHide} onMouseLeave={onHide}>
              {items.map(e => <HandleHideMenuItem {...e} onHide={onHide} />)}
            </Menu>
          </Overlay>
        )}
      </NavItem>
    );
  }
}

export default NavItemDropdown;
