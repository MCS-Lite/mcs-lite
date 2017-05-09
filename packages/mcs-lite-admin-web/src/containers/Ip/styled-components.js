import styled from 'styled-components';
import { MobileContentWrapper } from 'mcs-lite-ui';

export const HeightContainer = styled.div`
  height: 100%;
`;

export const Fixed = styled.div`
  position: fixed;
  bottom: 56px;
  width: 100%;
`;

export const ToastContainer = styled(MobileContentWrapper)`
  padding: 16px;

  > * {
    margin-top: 8px;
  }
`;
