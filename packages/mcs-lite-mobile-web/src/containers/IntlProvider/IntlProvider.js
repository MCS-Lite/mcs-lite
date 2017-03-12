import React, { PropTypes } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

class IntlProvider extends React.Component {
  static propTypes = {
    // Redux State
    locale: PropTypes.string,

    // Redux Action
    pushLocale: PropTypes.func.isRequired,

    // Props
    defaultLocale: PropTypes.string.isRequired,
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
