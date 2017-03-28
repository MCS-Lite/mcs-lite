import React from 'react';
import styled from 'styled-components';
import { IconDelete } from 'mcs-lite-icon';
import A from '../A';
import P from '../P';

export const StyledA = styled(A)`
  display: flex;
  align-items: center;

  > * {
    margin-right: 5px;
  }
`;

const ButtonClear = props =>
  <P {...props}><StyledA><IconDelete />Clear</StyledA></P>;

ButtonClear.displayName = 'ButtonClear';

export default ButtonClear;
