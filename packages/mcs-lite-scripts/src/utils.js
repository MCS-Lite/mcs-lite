import cheerio from 'cheerio';
import * as babel from 'babel-core';

const babelOptions = {
  presets: [require.resolve('babel-preset-mcs-lite')],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

const parseSVG = xml => {
  const $ = cheerio.load(xml, { xmlMode: true });
  $('path[fill="none"]').remove();
  return {
    viewBox: $('svg').attr('viewBox'),
    children: $('svg').html(),
  };
};

const template = (componentName, { children, viewBox }) =>
  `
import React from 'react';
import PropTypes from 'prop-types';

class ${componentName} extends React.Component {
  render() {
    const { size, children, ...otherProps } = this.props;

    return (
      <svg
        viewBox="${viewBox}"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        width={size}
        height={size}
        {...otherProps}
      >
        ${children}
        {children}
      </svg>
    );
  }
}

${componentName}.displayName = '${componentName}';
${componentName}.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
};
${componentName}.defaultProps = {
  size: '1em',
};
export default ${componentName};
`;

export default { parseSVG, template, compile };
