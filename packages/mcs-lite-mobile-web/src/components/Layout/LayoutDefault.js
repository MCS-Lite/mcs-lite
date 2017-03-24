import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutDefault = ({ children, ...otherProps }) => (
  <Container {...otherProps}>
    {children}
  </Container>
);

LayoutDefault.displayName = 'LayoutDefault';
LayoutDefault.propTypes = {
  children: PropTypes.any.isRequired,
};

export default LayoutDefault;
