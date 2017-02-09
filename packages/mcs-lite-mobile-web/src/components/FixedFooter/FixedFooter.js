import React from 'react';
import styled from 'styled-components';
import MaxWidthCenterWrapper from '..//MaxWidthCenterWrapper';

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${props => props.theme.color.grayLight};
`;

const FixedFooter = ({ children, ...otherProps }) =>
  <Footer {...otherProps}>
    <MaxWidthCenterWrapper>
      {children}
    </MaxWidthCenterWrapper>
  </Footer>;

export default FixedFooter;
