import styled from 'styled-components';
import Hr from 'mcs-lite-ui/lib/Hr';
import P from 'mcs-lite-ui/lib/P';
import Logo from '../../components/Logo';

export const StyledLogo = styled(Logo)`
  width: 200px;
`;

export const ErrorMessage = styled(P)`
  text-align: center;

  &:not(:empty) {
    margin-top: 20px;
  }
`;

export const StyledHr = styled(Hr)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 260px;
  margin: 0 auto;
`;

export const Form = styled.form`
  > input + input {
    margin-top: 10px;
  }

  > input:last-child {
    margin-top: 40px;
  }
`;
