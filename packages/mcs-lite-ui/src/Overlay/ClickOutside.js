/* global document */
/* eslint react/no-find-dom-node: 0 */

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class ClickOutside extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  }
  componentDidMount = () => {
    document.addEventListener('click', this.handleClickOutside, true);
  }
  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClickOutside, true);
  }
  handleClickOutside = (e) => {
    if (findDOMNode(this).contains(e.target)) return; // Hint: Omit clicking itself.

    this.props.onClick(e);
  }
  render = () => this.props.children;
}

export default ClickOutside;
