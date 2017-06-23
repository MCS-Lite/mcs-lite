/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import Overlay from '../Overlay';
import P from '../P';
import { Menu, MenuItem } from '../Menu';
import NavItem from './NavItem';

const StyledP = styled(P)`
  margin-right: 5px;
`;

const StyledIconFold = styled(IconFold)`
  transform: rotate(${props => (props.isShow ? -180 : 0)}deg);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

class NavItemDropdown extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
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
        <StyledIconFold size={18} isShow={isShow} />
        {isShow &&
          <Overlay target={target} onClickOutSide={onHide}>
            <Menu key="menu" onMouseLeave={onHide}>
              {items.map(e => <MenuItem {...e} />)}
            </Menu>
          </Overlay>}
      </NavItem>
    );
  }
}

export default NavItemDropdown;
