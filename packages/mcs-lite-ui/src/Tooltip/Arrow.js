// @flow
import * as React from 'react'; // eslint-disable-line
import toReactComponent from 'svgr.macro';

const Arrow: React.ComponentType<any> = toReactComponent('./svg/arrow.svg', {
  title: false,
  replaceAttrValues: ['#FAFAFA=rgba(0, 0, 0, 0.8)'],
});

Arrow.displayName = 'Arrow';

export default Arrow;
