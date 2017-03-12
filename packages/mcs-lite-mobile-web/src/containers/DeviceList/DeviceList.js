import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import R from 'ramda';
import Helmet from 'react-helmet';
import Transition from 'react-motion-ui-pack';
import { Link } from 'react-router';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import {
  PullToRefresh, PreventDrag, Input, ClickOutside, MobileDeviceCard,
  MobileHeader,
} from 'mcs-lite-ui';
import {
  Container, CardWrapper, StyledHeaderIcon, PlaceholdWrapper,
} from './styled-components';
import StyledLink from '../../components/StyledLink';
import updatePathname from '../../utils/updatePathname';

class DeviceList extends React.Component {
  static propTypes = {
    // Redux State
    devices: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

    // Redux Action
    fetchDeviceList: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  }
  state = { isFilterOpen: false, filterValue: '' };
  componentWillMount = () => this.props.fetchDeviceList();
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
        <MobileHeader.MobileHeader
          title={isFilterOpen ? '' : t('myTestDevices')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname('/account')}
            >
              <IconMenu />
            </MobileHeader.MobileHeaderIcon>
          }
          rightChildren={[
            isFilterOpen && (
              <Transition
                key="input"
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
            ),
            <ClickOutside key="icon" onClick={onClickOutside}>
              <StyledHeaderIcon onClick={onFilterClick} active={isFilterOpen}>
                <IconSearch />
              </StyledHeaderIcon>
            </ClickOutside>,
          ]}
        />

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
                        <MobileDeviceCard
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

export default DeviceList;
