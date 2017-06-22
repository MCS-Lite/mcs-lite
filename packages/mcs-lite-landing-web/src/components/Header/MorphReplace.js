import React from 'react';
import renderToJson from 'react-render-to-json';
import { interpolate } from 'flubber';
import raf from 'raf';

class MorphReplace extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = { d: this.getPath(props.children) };
  }

  componentWillReceiveProps(nextProps) {
    const interpolator = interpolate(
      this.getPath(this.props.children),
      this.getPath(nextProps.children),
    );

    let start = null;

    const easeInCubic = t => t * t * t;
    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    const drawLoop = timestamp => {
      let progress = null;
      if (start === null) start = timestamp;
      progress = timestamp - start;
      const value = easeInOut(progress / 300);
      this.setState({ d: interpolator(Math.min(value, 1)) })
      if (progress < 300) {
        requestAnimationFrame(drawLoop);
      }
    }

    requestAnimationFrame(drawLoop);
  }

  getPath = children => {
    const json = renderToJson(children);
    const path = json.children[0].children[0].attributes.d;
    return path;
  };

  render() {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d={this.state.d} />
      </svg>
    );
  }
}

export default MorphReplace;
