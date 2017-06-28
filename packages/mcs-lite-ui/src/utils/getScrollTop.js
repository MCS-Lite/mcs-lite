// @flow
/* global window, document */

type Fn = () => number;

/**
 * scrollTop polyfill
 * https://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
 */
const getScrollTop: Fn = () =>
  window.pageYOffset ||
  (document.documentElement && document.documentElement.scrollTop) ||
  (document.body && document.body.scrollTop) ||
  0;

export default getScrollTop;
