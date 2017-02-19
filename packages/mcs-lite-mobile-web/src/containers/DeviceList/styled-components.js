import styled from 'styled-components';
import { P, MobileHeader, MobileContentWrapper } from 'mcs-lite-ui';
import { opacity } from 'mcs-lite-theme';

export const Container = styled(MobileContentWrapper)`
  padding: 8px;
`;

export const CardWrapper = styled.div`

  > * {
    margin-bottom: 8px;
  }
`;

export const StyledHeaderIcon = styled(MobileHeader.MobileHeaderIcon)`
  color: ${props => opacity(props.active ? 0.5 : 1)(props.theme.color.white)};
`;

export const PlaceholdWrapper = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: ${props => props.theme.mobile.headerHeight};
  bottom: 0;
`;
