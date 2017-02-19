import React, { PropTypes } from 'react';
import styled from 'styled-components';
import MobileContentWrapper from '../MobileContentWrapper';

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${props => props.theme.color.grayLight};
`;

const MobileFixedFooter = ({ children, ...otherProps }) =>
  <Footer {...otherProps}>
    <MobileContentWrapper>
      {children}
    </MobileContentWrapper>
  </Footer>;

MobileFixedFooter.displayName = 'MobileFixedFooter';
MobileFixedFooter.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MobileFixedFooter;
