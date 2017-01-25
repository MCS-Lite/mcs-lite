const template = ({ name, jsx }) => `
import React, { PropTypes } from 'react';

const ${name} = ({ name, size, children, ...otherProps }) =>
  ${jsx}
${name}.displayName = '${name}';
${name}.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
};
${name}.defaultProps = {
  size: '1em',
};
export default ${name};
`;

export default template;
