// @flow
import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 0;

  > *:first-child {
    margin-right: 5px;
  }
`;

export default StyledLabel;
