import styled from 'styled-components';
import Button from 'mcs-lite-ui/lib/Button';
import P from 'mcs-lite-ui/lib/P';
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

  > *:not(:first-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 32px;
`;

export const VersionWrapper = styled(P)`
  text-align: center;
  margin-bottom: 8px;
`;

export const Footer = styled.footer`
  width: 100%;
`;
