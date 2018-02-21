// @flow
import * as React from 'react'; // eslint-disable-line
import toReactComponent from 'svgr.macro';

const IconCheck = toReactComponent('./svg/check.svg', {
  icon: true,
});

export default IconCheck;
