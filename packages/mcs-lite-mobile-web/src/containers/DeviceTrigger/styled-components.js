import styled from 'styled-components';
import Small from 'mcs-lite-ui/lib/Small';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';

export const Item = styled(MobileContentWrapper)`
  padding: 8px 16px;
  border-bottom: 1px solid ${props => props.theme.color.grayBase};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.color.grayDark};
`;

export const IconWrapper = styled.div`
  font-size: 24px;
  color: ${props => props.theme.color.primary};
`;
