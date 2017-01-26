/* global document */
/* eslint react/no-find-dom-node: 0 */

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import domAlign from 'dom-align';

class DomAlign extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.any.isRequired,         // react mounted instance
    alignConfig: PropTypes.object.isRequired, // docs: https://github.com/yiminghe/dom-align#alignconfig-object-details
  }
  componentDidMount = () => this.align();
  componentDidUpdate = () => this.align();
  getSourceNoe = (node) => { this.source = node; }
  align = () => {
    domAlign(findDOMNode(this.source), findDOMNode(this.props.target), this.props.alignConfig);
  }
  renderChildrenWithRef = () => React.cloneElement(this.props.children, { ref: this.getSourceNoe });
  render = () => this.renderChildrenWithRef();
}

export default DomAlign;
