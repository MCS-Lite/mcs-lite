import React from 'react';
import styled from 'styled-components';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { Heading, B, Input } from 'mcs-lite-ui';
import Transition from 'react-motion-ui-pack';
import IconEllipsisV from 'mcs-lite-icon/lib/IconEllipsisV';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';
import { actions } from '../../modules/ui';

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

const ItemWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-left: 16px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.white};
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
  font-size: 24px;
`;

class Header extends React.Component {
  onFilterChange = e => this.props.onFilterChange(e.target.value);
  render() {
    const { pathname, title, isFilterOpen, filterValue, onSearchClick } = this.props;
    const { onFilterChange } = this;

    return (
      <Container>
        <Fixed>
          <Wrapper>
            <ItemWrapper>
              {
                pathname === '/devices'
                ? <StyledLink to="/account"><IconEllipsisV /></StyledLink>
                : <StyledLink onClick={browserHistory.goBack}>--</StyledLink>
              }
              {
                !isFilterOpen && title && (
                  <StyledHeading level={3} color="white">
                    <B>{title}</B>
                  </StyledHeading>
                )
              }
            </ItemWrapper>
            {
              isFilterOpen &&
                <Transition
                  component={false}
                  enter={{
                    opacity: 1,
                    marginLeft: 0,
                  }}
                  leave={{
                    opacity: 0,
                    marginLeft: 50,
                  }}
                >
                  <Input
                    autoFocus
                    key="filter"
                    placeholder="搜尋"
                    value={filterValue}
                    onChange={onFilterChange}
                  />
                </Transition>
            }

            <ItemWrapper>
              <StyledLink onClick={onSearchClick}>
                <IconEllipsisV />
              </StyledLink>
            </ItemWrapper>
          </Wrapper>
        </Fixed>
      </Container>
    );
  }
}

export default connect(
  ({ routing, ui }) => ({
    pathname: routing.locationBeforeTransitions.pathname,
    title: '我的裝置',
    isFilterOpen: ui.isFilterOpen,
    filterValue: ui.filterValue,
  }),
  {
    onSearchClick: actions.setIsFilterOpen,
    onFilterChange: actions.setFilterValue,
  },
)(Header);
