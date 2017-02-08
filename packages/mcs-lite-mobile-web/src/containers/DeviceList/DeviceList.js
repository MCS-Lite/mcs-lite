import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Transition from 'react-motion-ui-pack';
import { P, PullToRefresh, PreventDrag, Input } from 'mcs-lite-ui';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header, { HEIGHT } from '../../components/Header/Header';
import HeaderIcon from '../../components/HeaderIcon';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 8px;
`;

const CardWrapper = styled.div`

  > * {
    margin-bottom: 8px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const PlaceholdWrapper = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: ${HEIGHT};
  bottom: 0;
`;

class DeviceList extends React.Component {
  state = { isFilterOpen: false, filterValue: '' };
  onFilterChange = e => this.setState({ filterValue: e.target.value });
  onFilterClick = () => this.setState({ isFilterOpen: !this.state.isFilterOpen });
  onRefresh = done => this.props.fetchDevices(done);
  includeDeviceName = device => device.name.includes(this.state.filterValue);
  render() {
    const { isFilterOpen, filterValue } = this.state;
    const { devices } = this.props;
    const { onRefresh, onFilterChange, onFilterClick, includeDeviceName } = this;

    return (
      <div>
        <Header title={!isFilterOpen && '我的裝置列表很長很長很長很長很長很長很長很長很長很長很長很長很長'}>
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
          <HeaderIcon onClick={onFilterClick}><IconSearch /></HeaderIcon>
        </Header>

        <main>
          <PullToRefresh onRefresh={onRefresh}>
            <Container>
              <PreventDrag >
                <Transition
                  component={CardWrapper}
                  appear={{ opacity: 0.8, translateY: 20 }}
                  enter={{ opacity: 1, translateY: 0 }}
                >
                  {
                    devices.filter(includeDeviceName).map(device => (
                      <StyledLink key={device.id} to={`/devices/${device.id}`}>
                        <DeviceCard
                          title={device.name}
                          image={device.image}
                        />
                      </StyledLink>
                    ))
                  }
                </Transition>
              </PreventDrag>

              {R.isEmpty(devices) &&
                <PlaceholdWrapper>目前還沒有任何測試裝置</PlaceholdWrapper>
              }
            </Container>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceList);
