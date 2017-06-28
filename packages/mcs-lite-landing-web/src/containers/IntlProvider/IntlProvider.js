import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import translation from 'mcs-lite-translation/lib/mcs-lite-landing-web.json';
import { localeMapper } from 'mcs-lite-ui/lib/utils/localeHelper';

export const DEFAULT_LOCALE = 'en';
const defaultLocaleMapper = localeMapper(DEFAULT_LOCALE);

const IntlProvider = ({ router, children }) => {
  // Remind: fix for netlify redirect to lower case path
  const locale = defaultLocaleMapper(router.params.locale);

  return (
    <ReactIntlProvider
      defaultLocale={DEFAULT_LOCALE}
      locale={locale}
      messages={translation[locale]}
    >
      {children}
    </ReactIntlProvider>
  );
};

IntlProvider.displayName = 'IntlProvider';
IntlProvider.propTypes = {
  // Props
  children: PropTypes.node.isRequired,

  // React-Router HOC
  router: PropTypes.object.isRequired,
};

export default IntlProvider;
