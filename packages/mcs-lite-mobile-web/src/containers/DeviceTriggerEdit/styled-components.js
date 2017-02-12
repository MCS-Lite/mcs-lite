import styled from 'styled-components';
import { Switch, Hr, Small } from 'mcs-lite-ui';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

export const Item = styled(MaxWidthCenterWrapper)`
  padding: 8px 16px;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled(MaxWidthCenterWrapper)`
  padding: 16px 16px 56px 16px;

  > * {
    margin-bottom: 16px;
  }
`;

export const StyledSamll = styled(Small)`
  display: block;
  margin-top: 4px;
  margin-bottom: 8px;
  color: ${props => props.theme.color.grayBase};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px 16px;

  > * {
    flex: 1;
  }

  > *:first-child {
    margin-right: 8px;
  }
`;

export const ScaledSwitch = styled(Switch)`
  transform: scale(0.48);
  transform-origin: right center;
`;

export const StyledHr = styled(Hr)`
  margin-top: 16px;
`;
