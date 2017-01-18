module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: 'stylelint-config-suitcss',
  rules: {
    'color-hex-case': 'upper',
    'declaration-block-properties-order': null,
    'color-hex-length': 'long',
    'selector-list-comma-newline-after': null,
    'rule-non-nested-empty-line-before': 'never-multi-line',
  },
  syntax: 'scss', // Setting the syntax to scss is needed for nesting and interpolation support!
};
