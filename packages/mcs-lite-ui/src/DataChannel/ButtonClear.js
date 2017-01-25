import React from 'react';
import styled from 'styled-components';
import { IconTrashO } from 'mcs-lite-icon';
import A from '../A';
import P from '../P';

const StyledA = styled(A)`
  display: flex;
  align-items: center;

  > * {
    margin-right: 5px;
  }
`;

const ButtonClear = props =>
  <P {...props}><StyledA><IconTrashO />Clear</StyledA></P>;

ButtonClear.displayName = 'ButtonClear';

export default ButtonClear;
