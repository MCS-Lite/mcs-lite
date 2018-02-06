// @flow
import * as React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import toReactComponent from 'svgr.macro';

type Props = {
  width?: number,
  height?: number,
};

const MCS: React.ComponentType<Props> = toReactComponent('./svg/mcs.svg', {
  title: false,
});

MCS.displayName = 'MCS';
MCS.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default MCS;
