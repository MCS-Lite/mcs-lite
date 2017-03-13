import styled from 'styled-components';
import { Hr, MobileContentWrapper, P } from 'mcs-lite-ui';

export const ErrorMessage = styled(P)`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const StyledHr = styled(Hr)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Layout = styled(MobileContentWrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

export const Form = styled.form`
  > input + input {
    margin-top: 8px;
  }

  > input:last-child {
    margin-top: 32px;
  }
`;
