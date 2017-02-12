import styled from 'styled-components';
import { P } from 'mcs-lite-ui';
import { opacity } from 'mcs-lite-theme';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import { HEIGHT } from '../../components/Header/Header';
import HeaderIcon from '../../components/HeaderIcon';

export const Container = styled(MaxWidthCenterWrapper)`
  padding: 8px;
`;

export const CardWrapper = styled.div`

  > * {
    margin-bottom: 8px;
  }
`;

export const StyledHeaderIcon = styled(HeaderIcon)`
  color: ${props => opacity(props.isFilterOpen ? 0.5 : 1)(props.theme.color.white)};
`;

export const PlaceholdWrapper = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: ${HEIGHT};
  bottom: 0;
`;
