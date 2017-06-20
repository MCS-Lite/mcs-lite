/* global ga, window */

export default function autotrack(id, breakpoints) {
  if (!id) return;

  /**
   * Custom dimension for projects
   */
  const DIMENSION_MEDIA_QUERY = 1;
  const DIMENSION_CLEAN_URL = 2;

  /**
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/tracking-snippet-reference
   * Creates an initial ga() function.
   * The queued commands will be executed once analytics.js loads.
   * Sets the time (as an integer) this tag was executed.
   * Used for timing hits.
   */
  /* eslint-disable */
  window.ga =
    window.ga ||
    function() {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  /* eslint-enable */

  ga('create', id, 'auto');

  /**
   * Avoiding the different urls actually point to the same page.
   * Modifying the 'page' field.
   */
  ga('require', 'cleanUrlTracker', {
    stripQuery: true,
    queryParamsWhitelist: ['q', 'locale'],
    queryDimensionIndex: DIMENSION_CLEAN_URL,
    indexFilename: 'index.html',
    trailingSlash: 'remove',
  });

  /**
   * Declarative event tracking via HTML attributes.
   * event
   */
  ga('require', 'eventTracker', {
    attributePrefix: 'data-ga-',
  });

  /**
   * Tracks how far down the page a user scrolls.
   * 'Max Scroll'
   */
  ga('require', 'maxScrollTracker');

  /**
   * Tracking media query.
   * 'definition.name'
   */
  ga('require', 'mediaQueryTracker', {
    definitions: [
      {
        name: 'Breakpoint',
        dimensionIndex: DIMENSION_MEDIA_QUERY,
        items: [
          { name: 'xs', media: 'all' },
          ...Object.keys(breakpoints).map(k => ({
            name: k,
            media: `(min-width: ${breakpoints[k]}px)`,
          })),
        ],
      },
    ],
    changeTimeout: 3000,
  });

  /**
   * Tracks form submits to external domains.
   * 'Outbound Form'
   */
  ga('require', 'outboundFormTracker');

  /**
   * Tracks link clicks to external domains.
   * 'Outbound Link'
   */
  ga('require', 'outboundLinkTracker');

  /**
   * Capturing how long the page was in the visible state.
   * Note: It send the initial pageview.
   * 'pageview' | 'Page Visibility' | 'page load'
   */
  ga('require', 'pageVisibilityTracker', {
    sendInitialPageview: true,
  });

  /**
   * URL changes for SPA.
   * 'pageview'
   */
  ga('require', 'urlChangeTracker');
}
