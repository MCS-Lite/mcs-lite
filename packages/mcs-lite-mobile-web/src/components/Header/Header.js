import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';

const height = '4rem';

const HeaderContainer = styled.header`
  height: ${height};
`;

const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.color.primary};
  height: ${height};
`;

const StyledLink = styled(Link)`
  color: blue;
  margin-right: 5px;
`;

const Header = () =>
  <HeaderContainer>
    <FixedContainer>
      <MaxWidthCenterWrapper>
        <IconFold />
        <StyledLink to="/">Homepage</StyledLink>
        <StyledLink to="/devices">Devices</StyledLink>
      </MaxWidthCenterWrapper>
    </FixedContainer>
  </HeaderContainer>;

export default Header;
