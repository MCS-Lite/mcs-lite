import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import localeMapper from '../../utils/localeMapper';

const translation = {
  'zh-TW': {
    'App.welcome': '歡迎！',
  },
  en: {
    'App.welcome': 'Welcome!',
  },
};

const IntlProvider = ({ defaultLocale, router, ...otherProps }) => {
  // Remind: fix for netlify redirect to lower case path
  const locale = localeMapper(router.params.locale);

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
