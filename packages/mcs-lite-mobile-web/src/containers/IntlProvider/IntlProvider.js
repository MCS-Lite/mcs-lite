import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

const IntlProvider = ({ locale, defaultLocale, ...otherProps }) =>
  <ReactIntlProvider
    {...otherProps}
    defaultLocale={defaultLocale}
    locale={locale || defaultLocale}
    messages={{}} // TODO: import i18n messages object
  />;

IntlProvider.displayName = 'IntlProvider';
IntlProvider.propTypes = {
  // Redux State
  locale: PropTypes.string,

  // Props
  defaultLocale: PropTypes.string.isRequired,
};

export default IntlProvider;
