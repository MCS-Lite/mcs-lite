import { connect } from 'react-redux';
import { actions as routingActions } from '../../modules/routing';
import IntlProvider from './IntlProvider';

export const mapStateToProps = ({ routing }) => ({
  locale: routing.locationBeforeTransitions.query.locale,
});
export const mapDispatchToProps = { pushLocale: routingActions.pushLocale };

export default connect(mapStateToProps, mapDispatchToProps)(IntlProvider);
