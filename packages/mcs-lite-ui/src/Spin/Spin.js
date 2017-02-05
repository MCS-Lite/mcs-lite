import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`

  > * {
    transform-origin: center center;
    animation: ${rotate360} 0.6s infinite cubic-bezier(0.41, 0.01, 0.58, 1);
  }
`;

Spin.displayName = 'Spin';

export default Spin;
