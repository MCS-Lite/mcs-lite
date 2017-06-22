/* global window, document */

/**
 * scrollTop polyfill
 * https://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
 */
const getScrollTop = () =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0;

export default getScrollTop;
