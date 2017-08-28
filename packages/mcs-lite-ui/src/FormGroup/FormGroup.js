import styled from 'styled-components';
import Label from '../Label';

const FormGroup = styled.div`
  width: 100%;

  ${Label} {
    display: block;
    padding-bottom: 5px;
  }

  * + ${Label} {
    margin-top: 10px;
  }
`;

FormGroup.displayName = 'FormGroup';

export default FormGroup;
