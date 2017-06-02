import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';
import {
  StyledButton,
  TabWrapper,
  StyledCodeMirror,
} from './styled-components';

const TABS = ['db', 'oauth', 'rest', 'wot'];
const DEFAULT_TAB_VALUE = TABS[0];

class Ip extends React.Component {
  static propTypes = {
    // Redux State
    system: PropTypes.shape({
      db: PropTypes.object.isRequired,
      oauth: PropTypes.object.isRequired,
      rest: PropTypes.object.isRequired,
      wot: PropTypes.object.isRequired,
    }).isRequired,

    // Redux Action
    fetchSystemByType: PropTypes.func.isRequired,
    setSystemByType: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };
  state = { tabValue: DEFAULT_TAB_VALUE };
  componentWillMount = () => this.props.fetchSystemByType(this.state.tabValue);
  onTabItemClick = (e, value) => {
    this.setState({ tabValue: value });
    this.props.fetchSystemByType(value);
  };
  onCodeMirrorChange = value =>
    this.props.setSystemByType({
      data: value,
      type: this.state.tabValue,
    });

  render() {
    const { system, getMessages: t } = this.props;
    const { onCodeMirrorChange, onTabItemClick } = this;
    const { tabValue } = this.state;

    return (
      <div>
        <Helmet><title>{t('systemManagement')}</title></Helmet>
        <DashboardTitle title={t('systemManagement')} />
        <DashboardDesc>{t('description')}</DashboardDesc>

        <TabWrapper>
          {TABS.map(value => (
            <TabItem
              key={value}
              value={value}
              onClick={onTabItemClick}
              active={tabValue === value}
            >
              {value}.json
            </TabItem>
          ))}
        </TabWrapper>

        <StyledCodeMirror
          value={system[tabValue]}
          onChange={onCodeMirrorChange}
          options={{ mode: 'javascript', lineNumbers: true }}
        />

        <StyledButton>{t('save')}</StyledButton>
      </div>
    );
  }
}

export default Ip;
