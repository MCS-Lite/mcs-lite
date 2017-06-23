import styled from 'styled-components';

const Nav = styled.div`
  display: flex;

  > *:first-child {
    padding-left: 0;
  }

  > *:last-child {
    padding-right: 0;
  }
`;

export default Nav;
