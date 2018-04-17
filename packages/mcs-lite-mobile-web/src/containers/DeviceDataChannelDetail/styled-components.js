import styled from 'styled-components';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';
import Small from 'mcs-lite-ui/lib/Small';
import A from 'mcs-lite-ui/lib/A';

export const CardContainer = styled(MobileContentWrapper)`
  padding: 8px 8px 0 8px;
`;

export const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.color.grayDark};
`;

export const HistoryContainer = styled(MobileContentWrapper)`
  padding: 16px;
`;

export const ChartWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
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
