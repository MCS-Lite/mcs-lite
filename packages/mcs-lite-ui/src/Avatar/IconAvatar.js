// @flow
import * as React from 'react'; // eslint-disable-line
import toReactComponent from 'svgr.macro';

type Props = {
  width?: number,
  height?: number,
};

const IconAvatar: React.ComponentType<Props> = toReactComponent(
  './svg/avatar.svg',
  {
    icon: true,
  },
);

export default IconAvatar;
