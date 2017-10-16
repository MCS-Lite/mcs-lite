import styled from 'styled-components';
import { Link } from 'react-router';
import { Column } from 'hedron';
import Nav from 'mcs-lite-ui/lib/LandingHeader/Nav';
import NavItem from 'mcs-lite-ui/lib/LandingHeader/NavItem';

export const StyledColumn = styled(Column)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

export const HiddenForPreRenderTrick = styled.div`
  visibility: hidden;
  display: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 28px;
  width: auto;
`;

export const DesktopNav = styled(Nav)`
  overflow: hidden;

  ${NavItem} {
    flex-shrink: 0;
  }
`;

export const MobileNav = styled(Nav)`
  ${NavItem} {
    padding-right: 0;
  }
`;
