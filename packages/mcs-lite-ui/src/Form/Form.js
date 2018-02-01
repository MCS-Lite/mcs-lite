// @flow
import * as React from 'react';
import styled from 'styled-components';
import Fieldset from './Fieldset';

export const FIELDSET_MAX_WIDTH = 478;

const Form: React.ComponentType<{}> = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > ${Fieldset} {
    max-width: ${FIELDSET_MAX_WIDTH}px;
  }

  > ${Fieldset}:not(:first-child) {
    margin-top: 10px;
  }
`;
Form.displayName = 'Form';

export default Form;
