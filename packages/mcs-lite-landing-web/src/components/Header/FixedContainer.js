/* global document, window */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import raf from 'raf';

export const HEIGHT = 50;
const HEADER_ZINDEX = 1;

const Container = styled.header`
  height: ${HEIGHT}px;
  background: ${props => props.theme.color.grayLight};
`;

// prettier-ignore
const Fixed = styled.div`
  z-index: ${HEADER_ZINDEX};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.color.grayLight};
  box-shadow: ${props => (props.isTop ? 'none' : '0 1px 0 0 rgba(0, 0, 0, 0.05)')};
  transition: box-shadow cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
`;

class FixedContainer extends React.PureComponent {
  static propTypes = {
    // Props
    children: PropTypes.node.isRequired,
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
    const { children } = this.props;
    const { isTop } = this.state;

    return (
      <Container>
        <Fixed isTop={isTop}>
          {children}
        </Fixed>
      </Container>
    );
  }
}

export default FixedContainer;
