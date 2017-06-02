import styled from 'styled-components';
import Button from 'mcs-lite-ui/lib/Button';
import P from 'mcs-lite-ui/lib/P';
import CodeMirror from 'react-codemirror';

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

export const StyledCodeMirror = styled(CodeMirror)`
  > .CodeMirror{
    border: 1px solid ${props => (props.error ? props.theme.color.error : props.theme.color.grayDark)};
    border-radius: 3px;
    height: 320px;
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
`;
