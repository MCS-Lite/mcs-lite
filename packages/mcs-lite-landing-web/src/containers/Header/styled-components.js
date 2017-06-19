import styled from 'styled-components';
import { Column } from 'hedron';
import P from 'mcs-lite-ui/lib/P';
import A from 'mcs-lite-ui/lib/A';
import { MenuItem, Menu } from 'mcs-lite-ui/lib/Menu';
import IconFold from 'mcs-lite-icon/lib/IconFold';

export const HEIGHT = 50;
const HEADER_ZINDEX = 1;

export const Container = styled.header`
  height: ${HEIGHT}px;
  background: ${props => props.theme.color.grayLight};
`;

// prettier-ignore
export const Fixed = styled.div`
  z-index: ${HEADER_ZINDEX};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.color.grayLight};
  box-shadow: ${props => (props.isTop ? 'none' : '0 1px 0 0 rgba(0, 0, 0, 0.05)')};
  transition: box-shadow cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
`;

export const StyledColumn = styled(Column)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

export const StyledA = styled(A)`
  height: ${HEIGHT}px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color.black};
`;

export const StyledP = styled(P)`
  margin-right: 5px;
`;

export const Right = styled.div`
  display: flex;

  > ${StyledA} {
    padding: 0 15px;
  }

  > ${StyledA}:last-child {
    padding-right: 0;
  }
`;

export const StyledMenu = styled(Menu)`
  ${MenuItem} {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const HiddenForPreRenderTrick = styled.div`
  visibility: hidden;
  display: none;
`;

export const StyledIconFold = styled(IconFold)`
  transform: rotate(${props => (props.isShow ? -180 : 0)}deg);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;
