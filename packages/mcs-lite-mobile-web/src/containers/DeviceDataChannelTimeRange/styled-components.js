import styled from 'styled-components';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';

export const Container = styled(MobileContentWrapper)`
  padding: 16px 16px 56px 16px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 8px;

  > *:first-child {
    margin-bottom: 4px;
  }
`;

export const FakeInput = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  padding: 0 10px;
  cursor: pointer;
  min-height: ${props => props.theme.height.normal};
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  border-color: ${props => props.theme.color.grayDark};
  font-size: ${props => props.theme.fontSize.p};
  flex-shrink: 0;
  flex: 1;
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
