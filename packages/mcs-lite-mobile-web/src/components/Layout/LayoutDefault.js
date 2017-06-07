import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutDefault = ({ children, ...otherProps }) =>
  <Container {...otherProps}>
    {children}
  </Container>;

LayoutDefault.displayName = 'LayoutDefault';
LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutDefault;
