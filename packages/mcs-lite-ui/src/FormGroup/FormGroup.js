import styled from 'styled-components';

const FormGroup = styled.div`
  width: 100%;

  label {
    display: block;
    padding-bottom: 5px;
  }

  * + label {
    margin-top: 10px;
  }
`;

FormGroup.displayName = 'FormGroup';

export default FormGroup;
