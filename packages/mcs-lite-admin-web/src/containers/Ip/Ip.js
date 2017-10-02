import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Helmet from 'react-helmet';
import Table from 'mcs-lite-ui/lib/Table';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';
import { StyledButton, NaWrapper } from './styled-components';

class Ip extends React.Component {
  static propTypes = {
    // Redux State
    service: PropTypes.arrayOf(PropTypes.string).isRequired,
    isLoading: PropTypes.bool.isRequired,

    // Redux Action
    fetchIpList: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };
  componentWillMount = () => this.props.fetchIpList();
  render() {
    const { service, isLoading, getMessages: t } = this.props;
    const isNA = !isLoading && R.isEmpty(service);

    return (
      <div>
        <Helmet><title>{t('mcsLiteIpConnection')}</title></Helmet>
        <DashboardTitle title={t('mcsLiteIpConnection')} />
        <DashboardDesc>{t('description')}</DashboardDesc>

        <Table>
          <thead>
            <tr>
              <td>{t('serviceIpAddress')}</td>
            </tr>
          </thead>
          <tbody>
            {service.map(ip => <tr key={ip}><td>{ip}</td></tr>)}
          </tbody>
        </Table>

        {isNA && <NaWrapper>{t('na')}</NaWrapper>}

        {service[0] &&
          <a href={`//${service[0]}`} target="_blank" rel="noreferrer noopener">
            <StyledButton>{t('goToMCSLite')}</StyledButton>
          </a>}
      </div>
    );
  }
}

export default Ip;
