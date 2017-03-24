import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import arduino from 'highlight.js/lib/languages/arduino';
import gist from 'react-syntax-highlighter/dist/styles/github-gist';

registerLanguage('javascript', js);
registerLanguage('cpp', cpp); // Remind: for arduino
registerLanguage('arduino', arduino);

const Code = withTheme(({ style, theme, ...otherProps }) => (
  <SyntaxHighlighter
    style={gist}
    customStyle={{
      backgroundColor: 'initial',
      margin: 0,
      padding: 0,
      fontSize: theme.fontSize.small,
      ...style,
    }}
    wrapLines
    {...otherProps}
  />
));

Code.displayName = 'Code';
Code.propTypes = {
  language: PropTypes.oneOf(['javascript', 'cpp', 'arduino']),
  style: PropTypes.object,
};
Code.defaultProps = {
  language: 'javascript',
};

export default Code;
