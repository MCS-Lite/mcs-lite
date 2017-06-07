import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import translation from 'mcs-lite-translation/lib/mcs-lite-admin-web.json';

const IntlProvider = ({ locale, defaultLocale, ...otherProps }) =>
  <ReactIntlProvider
    {...otherProps}
    defaultLocale={defaultLocale}
    locale={locale || defaultLocale}
    messages={translation[locale]}
  />;

IntlProvider.displayName = 'IntlProvider';
IntlProvider.propTypes = {
  // Redux State
  locale: PropTypes.string,

  // Props
  defaultLocale: PropTypes.string.isRequired,
};

export default IntlProvider;
