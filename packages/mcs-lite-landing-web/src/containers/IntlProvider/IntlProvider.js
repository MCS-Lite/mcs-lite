import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

const translation = {
  'zh-TW': {
    'App.welcome': '歡迎！',
  },
  en: {
    'App.welcome': 'Welcome!',
  },
};

const IntlProvider = ({ defaultLocale, router, ...otherProps }) => {
  let locale = router.params.locale;

  // Remind: fix for netlify redirect to lower case path
  if (locale === 'zh-tw') locale = 'zh-TW';
  if (locale === 'zh-cn') locale = 'zh-CN';

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

export default IntlProvider;
