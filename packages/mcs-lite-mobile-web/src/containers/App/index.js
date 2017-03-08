import { connect } from 'react-redux';
import App from './App';

export const mapStateToProps = ({ ui }) => ({
  toasts: ui.toasts,
});

export default connect(mapStateToProps)(App);
