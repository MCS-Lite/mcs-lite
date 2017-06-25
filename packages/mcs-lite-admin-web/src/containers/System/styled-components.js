import React from 'react';
import styled from 'styled-components';
import Button from 'mcs-lite-ui/lib/Button';
import P from 'mcs-lite-ui/lib/P';
import IconLoading from 'mcs-lite-icon/lib/IconLoading';
import Spin from 'mcs-lite-ui/lib/Spin';
import Loadable from 'react-loadable';
import 'codemirror/lib/codemirror.css';

const Center = styled(P)`
  text-align: center;
  padding: 20px;
`;

const LoadableCodeMirror = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "LoadableCodeMirror" */ 'codemirror/mode/javascript/javascript',
    ).then(() =>
      import(/* webpackChunkName: "LoadableCodeMirror" */ 'react-codemirror'),
    ),
  loading: () =>
    <Center color="primary"><Spin><IconLoading size={20} /></Spin></Center>,
});

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export const TabWrapper = styled.div`
  display: inline-block;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
  margin-bottom: 10px;
`;

export const Message = styled(P)`
  margin-top: 5px;
`;

export const StyledLoadableCodeMirror = styled(LoadableCodeMirror)`
  > .CodeMirror {
    height: auto;
    border: 1px solid ${props =>
      props.error ? props.theme.color.error : props.theme.color.grayDark};
    border-radius: 3px;
    color: ${props => props.theme.color.black};
  }

  .CodeMirror-linenumber {
    text-align: center;
    color: ${props => props.theme.color.grayDark};
    background-color: ${props => props.theme.color.grayLight};
  }

  .CodeMirror-line {
    padding-left: 10px;
  }

  .CodeMirror-gutters {
    z-index: auto;
  }
`;
