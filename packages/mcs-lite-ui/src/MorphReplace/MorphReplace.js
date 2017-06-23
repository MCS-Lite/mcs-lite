/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import renderToJson from 'react-render-to-json';
import {
  interpolate,
  interpolateAll,
  splitPathString,
  separate,
  combine,
} from 'flubber';

// TODO: Only work for mcs-lite-icon
const getPath = children => {
  const json = renderToJson(children);
  const path = json.children[0].children[0].attributes.d;
  return path;
};

const easeInOut = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

class MorphReplace extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: 24,
    height: 24,
  };

  constructor(props) {
    super(props);
    this.state = { d: getPath(props.children) };
    this.rafId = null; // Remind: for canceling
  }

  componentWillReceiveProps(nextProps) {
    const fromPath = getPath(this.props.children);
    const toPath = getPath(nextProps.children);
    if (fromPath === toPath) return;

    const current = splitPathString(fromPath);
    const next = splitPathString(toPath);
    let interpolator;
    if (current.length === next.length) {
      // n-to-n
      interpolator = interpolateAll(current, next, { single: true });
    } else if (current.length === 1) {
      // 1-to-n, 1-to-1
      interpolator = separate(current[0], next, { single: true });
    } else if (next.length === 1) {
      // n-to-1
      interpolator = combine(current, next[0], { single: true });
    } else {
      // TODO: n-to-m, NOT animate well.
      interpolator = interpolate(fromPath, toPath);
    }

    let start = null;

    const drawLoop = timestamp => {
      let progress = null;
      if (start === null) start = timestamp;
      progress = timestamp - start;
      const value = easeInOut(progress / 300);
      this.setState({ d: interpolator(Math.min(value, 1)) });
      if (progress < 300) {
        this.rafId = window.requestAnimationFrame(drawLoop);
      }
    };

    this.rafId = window.requestAnimationFrame(drawLoop);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.rafId);
  }

  render() {
    const { children, width, height, ...otherProps } = this.props;
    return (
      <svg viewBox="0 0 24 24" width={width} height={height} {...otherProps}>
        <path d={this.state.d} />
      </svg>
    );
  }
}

export default MorphReplace;
