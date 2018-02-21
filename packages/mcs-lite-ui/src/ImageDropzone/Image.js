// @flow
import * as React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import toReactComponent from 'svgr.macro';

type Props = {
  width?: number,
  height?: number,
};

const Image: React.ComponentType<Props> = toReactComponent('./svg/image.svg', {
  title: false,
});
Image.displayName = 'Image';
Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;
