/* global ga */

import { BREAKPOINTS } from './landingTheme';

/**
 * Custom dimension. https://goo.gl/tp4uf9
 */
const DIMENSION_MEDIA_QUERY = 1;
const DIMENSION_CLEAN_URL = 2;

const autotrack = id => {
  if (!id) return;

  // TODO: DO not import all plugins https://github.com/googleanalytics/autotrack/issues/137
  import('autotrack/autotrack').then(() => {
    // prettier-ignore
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // eslint-disable-line

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
            ...Object.keys(BREAKPOINTS).map(k => ({
              name: k,
              media: `(min-width: ${BREAKPOINTS[k]}px)`,
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
  });
};

export default autotrack;
