import styled from 'styled-components';

const InputGroup = styled.div`
  display: flex;
  width: 100%;

  /* ============================
   * First Child
   * ============================
   */

  > *:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* ============================
   * Middle Child
   * ============================
   */

  > *:not(:first-child):not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* ============================
   * Last Child
   * ============================
   */

  > *:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

InputGroup.displayName = 'InputGroup';

export default InputGroup;
