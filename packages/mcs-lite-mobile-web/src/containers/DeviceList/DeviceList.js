import React from 'react';
import { findDOMNode } from 'react-dom';
import R from 'ramda';
import { connect } from 'react-redux';
import Transition from 'react-motion-ui-pack';
import { PullToRefresh, PreventDrag, Input, ClickOutside } from 'mcs-lite-ui';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import Header from '../../components/Header/Header';
import StyledLink from '../../components/StyledLink';
import { Container, CardWrapper, StyledHeaderIcon, PlaceholdWrapper } from './styled-components';

class DeviceList extends React.Component {
  state = { isFilterOpen: false, filterValue: '' };
  componentDidMount = () => this.props.fetchDeviceList();
  onFilterChange = e => this.setState({ filterValue: e.target.value });
  onFilterClick = () => this.setState({ isFilterOpen: !this.state.isFilterOpen });
  onClickOutside = (e) => {
    if (e.target === findDOMNode(this.input)) return; // Hint: Omit clicking input.

    this.setState({ isFilterOpen: false, filterValue: '' });
  }
  getInput = (node) => { this.input = node; }
  includeDeviceName = device => device.name.includes(this.state.filterValue);
  render() {
    const { isFilterOpen, filterValue } = this.state;
    const { fetchDeviceList, devices, isLoading } = this.props;
    const {
      onFilterChange, onClickOutside, onFilterClick,
      includeDeviceName, getInput,
    } = this;

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
                ref={getInput}
                autoFocus
                key="filter"
                placeholder="搜尋"
                value={filterValue}
                onChange={onFilterChange}
              />
            </Transition>
          }
          <ClickOutside onClick={onClickOutside}>
            <StyledHeaderIcon onClick={onFilterClick} isFilterOpen={isFilterOpen}>
              <IconSearch />
            </StyledHeaderIcon>
          </ClickOutside>
        </Header>

        <main>
          <PullToRefresh isLoading={isLoading} onPull={fetchDeviceList}>
            <Container>
              <PreventDrag >
                <Transition
                  component={CardWrapper}
                  appear={{ opacity: 0.8, marginTop: -20 }}
                  enter={{ opacity: 1, marginTop: 0 }}
                >
                  {
                    devices.filter(includeDeviceName).map(device => (
                      <StyledLink key={device.deviceId} to={`/devices/${device.deviceId}`}>
                        <DeviceCard
                          title={device.name}
                          image={device.deviceImageURL}
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
  ({ devices, ui }) => ({
    devices: R.values(devices),
    isLoading: ui.isLoading,
  }),
  { fetchDeviceList: actions.fetchDeviceList },
)(DeviceList);
