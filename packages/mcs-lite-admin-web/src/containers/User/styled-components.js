import React from 'react';
import styled from 'styled-components';
import Button from 'mcs-lite-ui/lib/Button';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import A from 'mcs-lite-ui/lib/A';

import P from 'mcs-lite-ui/lib/P';
import IconLoading from 'mcs-lite-icon/lib/IconLoading';
import Spin from 'mcs-lite-ui/lib/Spin';
import Loadable from 'react-loadable';
import 'codemirror/lib/codemirror.css';

export const InputFilterWrapper = styled.div`
  display: flex;
  align-items: center;

  > ${InputGroup} {
    flex-grow: 1;
  }

  > ${A} {
    margin-left: 10px;
  }
`;

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 100%;
  background-color: ${props => props.theme.color.white};

  > ${A} {
    display: flex;
    align-items: center;

    div {
      margin-left: 5px;
    }
  }
`;
