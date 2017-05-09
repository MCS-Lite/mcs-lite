import styled from 'styled-components';
import P from 'mcs-lite-ui/lib/P';
import Logo from '../../components/Logo';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  flex-basis: 40px;
  flex-shrink: 0;
  box-sizing: border-box;
  background-color: ${props => props.theme.color.grayLight};
  border-bottom: 1px solid ${props => props.theme.base.bodyBackgroundColor};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderItemWrapper = styled.div`
  display: flex;
  height: 100%;

  > * {
    border-left: 1px solid ${props => props.theme.base.bodyBackgroundColor};

    &:last-child {
      border-right: 1px solid ${props => props.theme.base.bodyBackgroundColor};
    }
  }
`;

export const HeaderItem = styled.div`
  height: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.color.primary};

  > ${P} {
    margin-left: 5px;
  }
`;

export const StyledLogo = styled(Logo)`
  height: 22px;
  padding: 9px 0;
`;

export const Body = styled.div`
  flex-grow: 1;
  display: flex;

  ${'' /* Remind: fixed for firefox: https://goo.gl/Rjqio3 */}
  min-height: 0;
`;

export const Nav = styled.nav`
  flex-basis: 150px;
  box-sizing: border-box;
  background-color: ${props => props.theme.color.grayLight};
  border-right: 1px solid ${props => props.theme.base.bodyBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  width: : 100%;
  height: ${props => props.theme.height.normal};
  display: flex;
  padding: 0 20px;
  align-items: center;
  cursor: pointer;
`;

export const NavItemControl = styled(NavItem)`
  color: ${props => props.theme.color.primary};
  border-top: 1px solid ${props => props.theme.base.bodyBackgroundColor};

  > ${P} {
    margin-left: 5px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  background-color: ${props => props.theme.color.white};
  overflow: auto;
`;
