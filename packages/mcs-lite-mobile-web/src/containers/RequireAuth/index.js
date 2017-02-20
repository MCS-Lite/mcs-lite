import { connect } from 'react-redux';
import { actions as authActions } from '../../modules/auth';
import RequireAuth from './RequireAuth';

export default connect(
  null,
  { requireAuth: authActions.requireAuth },
)(RequireAuth);
