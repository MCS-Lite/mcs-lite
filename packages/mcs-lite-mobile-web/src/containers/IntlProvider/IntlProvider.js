import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { actions as routingActions } from '../../modules/routing';

class IntlProvider extends React.Component {
  componentDidMount() {
    const { location, pushLocale, defaultLocale } = this.props;

    // Hint: Set to default locale. "/" => "/?locale=zh-TW"
    if (!location.query.locale) {
      pushLocale(defaultLocale);
    }
  }

  render() {
    const { location, defaultLocale, ...otherProps } = this.props;

    return (
      <ReactIntlProvider
        {...otherProps}
        defaultLocale={defaultLocale}
        locale={location.query.locale || defaultLocale}
        messages={{}}
      />
    );
  }
}

export default connect(
  ({ routing }) => ({ location: routing.locationBeforeTransitions }),
  ({ pushLocale: routingActions.pushLocale }),
)(IntlProvider);
