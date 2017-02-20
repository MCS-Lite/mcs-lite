import { connect } from 'react-redux';
import { actions as routingActions } from '../../modules/routing';
import IntlProvider from './IntlProvider';

export default connect(
  ({ routing }) => ({ locale: routing.locationBeforeTransitions.query.locale }),
  ({ pushLocale: routingActions.pushLocale }),
)(IntlProvider);
