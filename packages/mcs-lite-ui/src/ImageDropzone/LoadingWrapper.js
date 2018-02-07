// @flow
import styled from 'styled-components';
import Spin from '../Spin';

const LoadingWrapper = styled(Spin)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);

  > svg {
    fill: ${props => props.theme.color.grayLight};
  }
`;

export default LoadingWrapper;
