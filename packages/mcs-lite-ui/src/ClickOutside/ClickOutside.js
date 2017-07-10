/* global document */
/* eslint react/no-find-dom-node: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import rafThrottle from 'raf-throttle';

class ClickOutside extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  componentDidMount = () => {
    document.addEventListener('click', this.handleClickOutside, true);
    document.addEventListener('touchend', this.handleClickOutside, true);
  };
  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClickOutside, true);
    document.removeEventListener('touchend', this.handleClickOutside, true);
    this.handleClickOutside.cancel();
  };
  handleClickOutside = rafThrottle(e => {
    const node = findDOMNode(this);
    if (node && node.contains(e.target)) return; // Hint: Omit clicking itself.

    this.props.onClick(e);
  });
  render = () => this.props.children;
}

export default ClickOutside;
