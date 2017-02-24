import { connect } from 'react-redux';
import Toast from './Toast';

export const mapStateToProps = ({ ui }) => ({
  toasts: ui.toasts,
});

export default connect(mapStateToProps)(Toast);
