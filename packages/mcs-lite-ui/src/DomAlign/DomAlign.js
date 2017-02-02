/* global document */
/* eslint react/no-find-dom-node: 0 */

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import domAlign from 'dom-align';
import isString from '../utils/isString';

class DomAlign extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.any,                    // react mounted instance
    alignConfig: PropTypes.object.isRequired, // docs: https://github.com/yiminghe/dom-align#alignconfig-object-details
  }
  static defaultProps = {
    target: undefined,
  }
  state = { source: undefined }
  componentDidMount = () => this.align();
  componentDidUpdate = () => this.align();
  getSourceNoe = node => this.setState({ source: node });
  align = () => {
    const { target, alignConfig } = this.props;
    const { source } = this.state;

    if (!target || !source) return; // Wait for two react instance ready.
    domAlign(findDOMNode(source), findDOMNode(target), alignConfig);
  }
  renderChildrenWithRef = () => {
    if (isString(this.props.children)) {
      throw new Error(`
        You can not pass a Children as a "String" type to the <DomAlign />.
        Wrapping it with a tag. For example: <div>${this.props.children}</div>
      `);
    }

    return React.cloneElement(this.props.children, { ref: this.getSourceNoe });
  }
  render = () => this.renderChildrenWithRef();
}

export default DomAlign;
