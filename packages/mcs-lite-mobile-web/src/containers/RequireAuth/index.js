import { connect } from 'react-redux';
import { actions as authActions } from '../../modules/auth';
import RequireAuth from './RequireAuth';

export const mapStateToProps = null;
export const mapDispatchToProps = { requireAuth: authActions.requireAuth };

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
