import styled from 'styled-components';
import CommonDialog from 'mcs-lite-ui/lib/Dialog/CommonDialog';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import A from 'mcs-lite-ui/lib/A';
import P from 'mcs-lite-ui/lib/P';

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
  line-height: 0;

  > ${A} {
    display: inline-flex;
    align-items: center;

    div {
      margin-left: 5px;
      line-height: 1em;
    }
  }
`;

export const StyledCommonDialog = styled(CommonDialog)`
  padding-top: 40px;

  main {
    align-items: flex-start;
  }
`;

export const TabWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.grayBase};
  margin-bottom: 10px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 5px;
  }

  label {
    margin-right: 10px;
  }

  input {
    margin-right: 5px;
  }
`;

export const ErrorMessageP = styled(P)`
  padding-top: 5px;
`;

export const InputFileWrapper = styled.div`
  position: relative;
  height: ${props => props.theme.height.normal};

  > * {
    position: absolute;
    width: 100%;
    pointer-events: none;
  }

  input[type='file'] {
    opacity: 0;
    cursor: pointer;
    pointer-events: all;
  }
`;
