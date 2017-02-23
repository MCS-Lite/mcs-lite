import styled from 'styled-components';
import { MobileContentWrapper, Small, A } from 'mcs-lite-ui';

export const CardContainer = styled(MobileContentWrapper)`
  padding: 8px;
`;

export const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.color.grayBase};
`;

export const HistoryContainer = styled(MobileContentWrapper)`
  padding: 16px;
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const ResetWrapper = styled(A)`
  display: flex;
  font-size: 24px;
  align-items: center;

  > *:first-child {
    margin-right: 4px;
  }
`;
