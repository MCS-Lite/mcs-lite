/* global ga */
import { BREAKPOINTS } from './landingTheme';

const autotrack = id => {
  if (id) {
    // TODO: DO not import all plugins https://github.com/googleanalytics/autotrack/issues/137
    import('autotrack/autotrack').then(() => {
      // prettier-ignore
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // eslint-disable-line
      ga('create', id, 'auto');

      ga('require', 'cleanUrlTracker', {
        stripQuery: true,
        queryParamsWhitelist: ['q', 'locale'],
        queryDimensionIndex: 1,
        indexFilename: 'index.html',
        trailingSlash: 'remove',
      });

      ga('require', 'eventTracker', {
        attributePrefix: 'data-ga-',
      });

      ga('require', 'mediaQueryTracker', {
        definitions: [
          {
            name: 'Breakpoint',
            dimensionIndex: 1,
            items: [
              { name: 'sm', media: 'all' },
              ...Object.keys(BREAKPOINTS).map(k => ({
                name: k,
                media: `(min-width: ${BREAKPOINTS[k]}px)`,
              })),
            ],
          },
        ],
        changeTimeout: 3000,
      });

      ga('require', 'outboundLinkTracker');
      ga('require', 'urlChangeTracker');

      ga('send', 'pageview');
    });
  }
};

export default autotrack;
