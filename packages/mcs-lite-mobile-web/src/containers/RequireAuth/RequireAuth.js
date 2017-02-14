import React from 'react';
import { connect } from 'react-redux';
import { actions as authActions } from '../../modules/auth';

class RequireAuth extends React.Component {
  componentWillMount = () => this.props.requireAuth();
  render() {
    const { children, ...otherProps } = this.props;

    return React.cloneElement(children, otherProps);
  }
}

export default connect(
  null,
  { requireAuth: authActions.requireAuth },
)(RequireAuth);
