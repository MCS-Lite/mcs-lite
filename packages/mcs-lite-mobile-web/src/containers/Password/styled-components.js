import styled from 'styled-components';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

export const Container = styled(MaxWidthCenterWrapper)`
  padding: 16px 16px 56px 16px;

  > div + div {
    margin-top: 8px;
  }

  > div:last-child {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
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
