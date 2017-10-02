/* eslint-disable */
// TODO: https://github.com/MoOx/react-topbar-progress-indicator/pull/3

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');
var PropTypes = require('prop-types');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

/* eslint-disable no-unused-vars */
// for React, since flow type is converted to props

// topbar require window, so here is an universal workaround
var topbar = typeof window === 'undefined'
  ? {
      show: function show() {},
      hide: function hide() {},
      config: function config() {},
    }
  : require('topbar');

var semaphore = 0;

var getTopBar = function getTopBar(props) {
  return props.topbar || topbar;
};

var TopBar = (function(_Component) {
  _inherits(TopBar, _Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(
      this,
      Object.getPrototypeOf(TopBar).apply(this, arguments),
    );
  }

  _createClass(TopBar, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (semaphore === 0) {
          getTopBar(this.props).show();
        }
        semaphore++;
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        semaphore--;
        if (semaphore === 0) {
          getTopBar(this.props).hide();
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        return null;
      },
    },
  ]);

  return TopBar;
})(_react.Component);

TopBar.config = topbar.config;
TopBar.propTypes = {
  topbar: PropTypes.any,
};
exports.default = TopBar;
