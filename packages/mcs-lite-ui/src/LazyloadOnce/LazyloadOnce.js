/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

class LazyloadOnce extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    waypointConfig: PropTypes.object,
  };
  static defaultProps = {
    component: 'div',
    waypointConfig: {
      topOffset: -500,
      bottomOffset: -500,
      fireOnRapidScroll: true,
    },
  };
  state = { isShow: false };
  onEnter = () => {
    if (!this.state.isShow) this.setState({ isShow: true });
  };
  render() {
    const {
      children,
      height,
      component: Component,
      waypointConfig,
      ...otherProps
    } = this.props;
    const { isShow } = this.state;
    const { onEnter } = this;

    return (
      <Component style={{ height }} {...otherProps}>
        {children}
      </Component>
    );
  }
}

export default LazyloadOnce;
