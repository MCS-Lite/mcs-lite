/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import getScrollTop from '../utils/getScrollTop';

const ZINDEX = 1;

export const Container = styled.header`
  height: ${props => props.theme.height.header};
`;

export const Fixed = styled.div`
  z-index: ${ZINDEX};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.color.grayLight};
  height: ${props => props.theme.height.header};
  box-shadow: ${props =>
    props.isTop ? 'none' : '0 1px 0 0 rgba(0, 0, 0, 0.05)'};
  transition: box-shadow cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
  user-select: none;
`;

class LandingHeader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number,
  };

  static defaultProps = {
    offset: 40,
  };

  state = { isTop: true };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
    this.onScroll.cancel();
  };
  onScroll = rafThrottle(() => {
    this.setState({ isTop: getScrollTop() < this.props.offset });
  });

  render() {
    const { children, ...otherProps } = this.props;
    const { isTop } = this.state;

    return (
      <Container {...otherProps}>
        <Fixed isTop={isTop}>{children}</Fixed>
      </Container>
    );
  }
}

export default LandingHeader;
