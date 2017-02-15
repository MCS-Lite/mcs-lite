import React from 'react';
import { findDOMNode } from 'react-dom';
import R from 'ramda';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Transition from 'react-motion-ui-pack';
import { PullToRefresh, PreventDrag, Input, ClickOutside } from 'mcs-lite-ui';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import Header from '../../components/Header/Header';
import StyledLink from '../../components/StyledLink';
import { Container, CardWrapper, StyledHeaderIcon, PlaceholdWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';

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
  includeDeviceName = device => device.deviceName.includes(this.state.filterValue);
  render() {
    const { isFilterOpen, filterValue } = this.state;
    const { fetchDeviceList, devices, isLoading, getMessages: t } = this.props;
    const {
      onFilterChange, onClickOutside, onFilterClick,
      includeDeviceName, getInput,
    } = this;

    return (
      <div>
        <Helmet title={t('myTestDevices')} />
        <Header title={!isFilterOpen && t('myTestDevices')}>
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
                placeholder={t('search')}
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
                      <StyledLink key={device.deviceId} to={updatePathname(`/devices/${device.deviceId}`)}>
                        <DeviceCard
                          title={device.deviceName}
                          image={device.deviceImageURL || 'https://img.mediatek.com/600/mtk.linkit/productBanner.png'}
                        />
                      </StyledLink>
                    ))
                  }
                </Transition>
              </PreventDrag>

              {R.isEmpty(devices) && <PlaceholdWrapper>{t('noDevice')}</PlaceholdWrapper>}
            </Container>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default compose(
  connect(
    ({ devices, ui }) => ({
      devices: R.values(devices),
      isLoading: ui.isLoading,
    }),
    { fetchDeviceList: actions.fetchDeviceList },
  ),
  withGetMessages(messages, 'DeviceList'),
)(DeviceList);
