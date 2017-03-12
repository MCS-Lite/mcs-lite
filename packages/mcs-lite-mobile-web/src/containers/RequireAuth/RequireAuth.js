import React, { PropTypes } from 'react';
import R from 'ramda';

const omitProps = R.omit(['requireAuth']);

class RequireAuth extends React.Component {
  static propTypes = {
    // Redux Action
    requireAuth: PropTypes.func.isRequired,

    // props
    children: PropTypes.any.isRequired,
  }
  componentWillMount = () => this.props.requireAuth();
  render() {
    const { children, ...otherProps } = this.props;

    return React.cloneElement(children, omitProps(otherProps));
  }
}

export default RequireAuth;
