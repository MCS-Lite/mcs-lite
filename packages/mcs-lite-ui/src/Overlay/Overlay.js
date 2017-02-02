/* eslint react/no-find-dom-node: 0 */

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Portal from 'react-overlays/lib/Portal';
import Transition from 'react-motion-ui-pack';
import DomAlign from '../DomAlign';
import ClickOutside from '../ClickOutside';
import emptyFunction from '../utils/emptyFunction';

class Overlay extends React.Component {
  static propTypes = {
    onClickOutSide: PropTypes.func,                // for ClickOutside
    children: PropTypes.node.isRequired,
    target: PropTypes.any,                         // react mounted instance
    alignConfig: PropTypes.object.isRequired,      // docs: https://github.com/yiminghe/dom-align#alignconfig-object-details
    transitionConfig: PropTypes.object.isRequired, // docs: https://github.com/souporserious/react-motion-ui-pack#props
  }
  static defaultProps = {
    onClickOutSide: emptyFunction,
    alignConfig: {
      points: ['tr', 'br'], // bottom-right
      offset: [0, 5],
    },
    transitionConfig: {
      component: false,
      enter: {
        translateY: 0,
      },
      leave: {
        translateY: -10,
      },
    },
  }
  onClickOutSide = (e) => {
    if (findDOMNode(this.props.target).contains(e.target)) return; // Hint: Omit clicking target.

    this.props.onClickOutSide(e);
  }
  renderChildrenWithStyle = () => React.cloneElement(this.props.children, { style: { ...this.props.children.style, position: 'absolute' }});

  render() {
    return (
      <Portal>
        <ClickOutside onClick={this.onClickOutSide}>
          <DomAlign alignConfig={this.props.alignConfig} target={this.props.target}>
            <Transition {...this.props.transitionConfig}>
              {this.renderChildrenWithStyle()}
            </Transition>
          </DomAlign>
        </ClickOutside>
      </Portal>
    );
  }
}

export default Overlay;
