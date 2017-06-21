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
  }
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
