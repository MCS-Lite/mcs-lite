import React, { PropTypes } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

class IntlProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.string,
    defaultLocale: PropTypes.string.isRequired,
    pushLocale: PropTypes.func.isRequired,
  }
  componentWillMount() {
    const { locale, pushLocale, defaultLocale } = this.props;

    // Hint: Set to default locale. "/" => "/?locale=zh-TW"
    if (!locale) {
      pushLocale(defaultLocale);
    }
  }

  render() {
    const { locale, defaultLocale, ...otherProps } = this.props;

    return (
      <ReactIntlProvider
        {...otherProps}
        defaultLocale={defaultLocale}
        locale={locale || defaultLocale}
        messages={{}} // TODO: import i18n messages object
      />
    );
  }
}

export default IntlProvider;
