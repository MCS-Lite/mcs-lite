import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
  color: blue;
  margin-right: 5px;
`;

const Header = () =>
  <header>
    <StyledLink to="/">Homepage</StyledLink>
    <StyledLink to="/devices">Devices</StyledLink>
  </header>;

export default Header;
