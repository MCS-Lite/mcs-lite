import styled from 'styled-components';
import CommonDialog from 'mcs-lite-ui/lib/Dialog/CommonDialog';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import A from 'mcs-lite-ui/lib/A';

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
`;
