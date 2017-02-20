module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: 'stylelint-config-suitcss',
  rules: {
    'color-hex-case': 'upper',
    'order/declaration-block-properties-alphabetical-order': null,
    'color-hex-length': 'long',
    'selector-list-comma-newline-after': null,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['after-rule', 'after-single-line-comment', 'inside-block-and-after-rule', 'first-nested'],
    }],
  },
  syntax: 'scss', // Setting the syntax to scss is needed for nesting and interpolation support!
};
