import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import translation from 'mcs-lite-translation/lib/mcs-lite-landing-web.json';
import { localeMapper } from 'mcs-lite-ui/lib/utils/localeHelper';

export const DEFAULT_LOCALE = 'en';
const defaultLocaleMapper = localeMapper(DEFAULT_LOCALE);

const IntlProvider = ({ defaultLocale, router, ...otherProps }) => {
  // Remind: fix for netlify redirect to lower case path
  const locale = defaultLocaleMapper(router.params.locale);

  return (
    <ReactIntlProvider
      {...otherProps}
      defaultLocale={defaultLocale}
      locale={locale}
      messages={translation[locale]}
    />
  );
};

IntlProvider.displayName = 'IntlProvider';
IntlProvider.propTypes = {
  // Props
  defaultLocale: PropTypes.string.isRequired,

  // React-Router HOC
  router: PropTypes.object.isRequired,
};
IntlProvider.defaultProps = {
  defaultLocale: 'en',
};

export default IntlProvider;
