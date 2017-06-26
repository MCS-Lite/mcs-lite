/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import rafThrottle from 'raf-throttle';

class Lazyload extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number,
  };
  state = { isShow: false };
  shouldComponentUpdate = () => !this.state.isShow; // Once
  componentWillUnmount = () => this.onEnter.cancel();
  onEnter = rafThrottle(() => {
    if (!this.state.isShow) this.setState({ isShow: true });
  });
  render() {
    const { children, height } = this.props;
    const { isShow } = this.state;
    const { onEnter } = this;

    return (
      <div style={{ height }}>
        {isShow
          ? children
          : <Waypoint
              scrollableAncestor={window}
              onEnter={onEnter}
              topOffset={-500}
              bottomOffset={-500}
              fireOnRapidScroll
            />}
      </div>
    );
  }
}

export default Lazyload;
