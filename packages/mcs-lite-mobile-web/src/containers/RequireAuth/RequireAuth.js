import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

const omitProps = R.omit(['requireAuth']);

class RequireAuth extends React.Component {
  static propTypes = {
    // Redux Action
    requireAuth: PropTypes.func.isRequired,

    // props
    children: PropTypes.node.isRequired,
  };
  componentWillMount = () => this.props.requireAuth();
  render() {
    const { children, ...otherProps } = this.props;

    return React.cloneElement(children, omitProps(otherProps));
  }
}

export default RequireAuth;
