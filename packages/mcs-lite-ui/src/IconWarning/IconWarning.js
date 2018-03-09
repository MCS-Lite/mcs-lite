// @flow
import * as React from 'react'; // eslint-disable-line
import toReactComponent from 'svgr.macro';

type Props = {
  width?: number,
  height?: number,
};

const IconWarning: React.ComponentType<Props> = toReactComponent(
  './svg/img_warning.svg',
  {
    title: false,
  },
);

export default IconWarning;
