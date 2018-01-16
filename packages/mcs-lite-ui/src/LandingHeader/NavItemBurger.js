/* global window, document */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import Portal from 'react-overlays/lib/Portal';
import Transition from 'react-motion-ui-pack';
import spring from 'react-motion/lib/spring';
import { IconMenu, IconClose } from 'mcs-lite-icon';
import MorphReplace from '../MorphReplace';
import P from '../P';
import NavItem from './NavItem';

export const StyledP = styled(P)`
  margin-right: 5px;
`;

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    0deg,
    rgba(250, 250, 250, 0.9) 0%,
    #ffffff 100%
  );
  padding-top: ${props => props.theme.height.header};
  overflow: auto;

  > *:last-child {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
  }
`;

const StyledNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(a) {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    margin: 0 50px;
  }
`;

export const HandleHideNavItem = ({
  onHide,
  onClick,
  disabled,
  ...otherProps
}) => (
  <StyledNavItem
    {...otherProps}
    disabled={disabled}
    onClick={e => {
      if (onClick) onClick(e);
      if (!disabled) onHide(e);
    }}
  />
);
HandleHideNavItem.displayName = 'HandleHideNavItem';
HandleHideNavItem.propTypes = {
  onHide: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

class NavItemBurger extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,

    // NavItem
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        children: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
      }),
    ).isRequired,
  };

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
    const { onClick, onHide } = this;
    const { isShow } = this.state;
    const { children, items, ...otherProps } = this.props;

    return (
      <NavItem onClick={onClick} {...otherProps}>
        {children && <StyledP>{children}</StyledP>}
        <MorphReplace width={24} height={24}>
          {isShow ? <IconClose key="close" /> : <IconMenu key="menu" />}
        </MorphReplace>

        {/* Portal */}
        {isShow && (
          <Portal>
            <Transition
              component={false}
              appear={{ opacity: 0.8, translateY: -50 }}
              enter={{
                opacity: 1,
                translateY: spring(0, { stiffness: 330, damping: 16 }),
              }}
            >
              <Fixed key="Fixed">
                {items.map(e => <HandleHideNavItem {...e} onHide={onHide} />)}
              </Fixed>
            </Transition>
          </Portal>
        )}
      </NavItem>
    );
  }
}

export default NavItemBurger;
