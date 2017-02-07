import React from 'react';
import styled from 'styled-components';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';

const height = '56px;';

const Container = styled.header`
  height: ${height};
  z-index: 1;
`;

const Fixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.color.primary};
  height: ${height};
`;

const Wrapper = styled(MaxWidthCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
`;

const Header = ({ pathname }) =>
  <Container>
    <Fixed>
      <Wrapper>
        {
          pathname === '/devices'
            ? <StyledLink to="/account">＝</StyledLink>
            : <StyledLink onClick={browserHistory.goBack}>--</StyledLink>
        }

        <StyledLink to="/">?</StyledLink>
      </Wrapper>
    </Fixed>
  </Container>;

export default connect(
  ({ routing }) => ({ pathname: routing.locationBeforeTransitions.pathname }),
)(Header);
