import React from 'react';
import styled from 'styled-components';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { Heading, B, Input } from 'mcs-lite-ui';
import Transition from 'react-motion-ui-pack';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import IconBars from 'mcs-lite-icon/lib/IconBars';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
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
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled(MaxWidthCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin: 0 16px;
  user-select: none;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  onFilterChange = e => this.props.setFilterValue(e.target.value);
  onSearchClick = () => this.props.setIsFilterOpen(!this.props.isFilterOpen);
  render() {
    const { title, isFilterable, isFilterOpen, filterValue } = this.props;
    const { onFilterChange, onSearchClick } = this;

    return (
      <Container>
        <Fixed>
          <Wrapper>
            <Left>
              {isFilterable
                ? <StyledLink to="/account"><IconBars /></StyledLink>
                : <StyledLink onClick={browserHistory.goBack}><IconArrowLeft /></StyledLink>
              }
              {!isFilterOpen && title &&
                <StyledHeading level={3} color="white"><B>{title}</B></StyledHeading>
              }
              {isFilterOpen &&
                <Transition
                  component={false}
                  enter={{ opacity: 1, marginLeft: 0 }}
                  leave={{ opacity: 0, marginLeft: 50 }}
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
            </Left>

            <Right>
              {isFilterable &&
                <StyledLink onClick={onSearchClick}><IconSearch /></StyledLink>
              }
            </Right>
          </Wrapper>
        </Fixed>
      </Container>
    );
  }
}

export default connect(
  ({ ui }) => ({
    title: '我的裝置名字非常長長長長長長長長長長長長長長長長長長',
    isFilterable: ui.header.isFilterable,
    isFilterOpen: ui.header.isFilterOpen,
    filterValue: ui.header.filterValue,
  }),
  {
    setIsFilterOpen: actions.setIsFilterOpen,
    setFilterValue: actions.setFilterValue,
  },
)(Header);
