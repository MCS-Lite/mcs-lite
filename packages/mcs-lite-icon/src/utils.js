import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import * as babel from 'babel-core';

const babelOptions = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../.babelrc'),
  'utf8',
));
babelOptions.babelrc = false;

const compile = code => babel.transform(code, babelOptions).code;

const parseSVG = (xml) => {
  const $ = cheerio.load(xml, { xmlMode: true });
  $('path[fill="none"]').remove();
  return {
    viewBox: $('svg').attr('viewBox'),
    children: $('svg').html(),
  };
};

const template = (componentName, { children, viewBox }) => `
import React, { PropTypes } from 'react';

const ${componentName} = ({ name, size, children, ...otherProps }) =>
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
  </svg>;

${componentName}.displayName = '${componentName}';
${componentName}.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
};
${componentName}.defaultProps = {
  size: '1em',
};
export default ${componentName};
`;

export default { parseSVG, template, compile };
