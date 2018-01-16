import PropTypes from "prop-types";
import React from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import translation from "mcs-lite-translation/lib/mcs-lite-mobile-web.json";

const IntlProvider = ({ locale, defaultLocale, ...otherProps }) => (
  <ReactIntlProvider
    {...otherProps}
    defaultLocale={defaultLocale}
    locale={locale}
    messages={translation[locale]}
  />
);

IntlProvider.displayName = "IntlProvider";
IntlProvider.propTypes = {
  // Redux State
  locale: PropTypes.string, // Remind: Missing locale data for locale: "undefined". Using default locale: "zh-TW" as fallback.

  // Props
  defaultLocale: PropTypes.string.isRequired
};

export default IntlProvider;
