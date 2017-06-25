import styled from 'styled-components';
import { Column, withBreakpoints } from 'hedron';

export const Container = styled.footer`
  background-color: ${props => props.theme.color.black};
`;

export const StyledColumn = styled(Column)`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a + a {
    margin-left: 20px;
  }

  img {
    height: 32px;
    width: 32px;
    color: ${props => props.theme.color.white};
  }
`;

export const FakeIcon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
  border-radius: 4px;
  color: ${props => props.theme.color.black};
  text-decoration: none;
`;

export const RWDWrapper = withBreakpoints(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${props => props.breakpoints.sm}px) {
    flex-direction: column-reverse;
    text-align: center;

    ${IconWrapper} {
      margin-bottom: 5px;
    }
  }
`);
