import styled from 'styled-components';
import { Button } from 'mcs-lite-ui';
import Logo from '../../components/Logo';

export const FlatButton = styled(Button)`
  border: initial;
  border-radius: initial;
  height: 56px;
  border-top: 1px solid ${props => props.theme.color.white};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 32px;
`;

export const Footer = styled.footer`
  width: 100%;
`;
