import { connect } from 'react-redux';
import IntlProvider from './IntlProvider';

export const mapStateToProps = ({ routing }) => ({
  locale: routing.locationBeforeTransitions.query.locale,
});

export default connect(mapStateToProps)(IntlProvider);
