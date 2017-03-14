import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import arduino from 'highlight.js/lib/languages/arduino';
import markdown from 'highlight.js/lib/languages/markdown';
// import http from 'highlight.js/lib/languages/http';

// import atomOneLight from 'react-syntax-highlighter/dist/styles/atom-one-light';
import gist from 'react-syntax-highlighter/dist/styles/github-gist';

registerLanguage('javascript', js);
registerLanguage('cpp', cpp);
registerLanguage('arduino', arduino);
registerLanguage('markdown', markdown);
// registerLanguage('http', http);

const Code = ({ style, ...otherProps }) =>
  <SyntaxHighlighter
    style={gist}
    customStyle={{ backgroundColor: 'initial', ...style }}
    wrapLines
    {...otherProps}
  />;

Code.displayName = 'Code';
Code.defaultProps = {
  language: 'javascript',
};

export default Code;
