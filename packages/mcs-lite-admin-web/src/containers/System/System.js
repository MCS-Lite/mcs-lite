import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Helmet from 'react-helmet';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import isJSONValidator from 'validator/lib/isJSON';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';
import {
  StyledButton,
  TabWrapper,
  StyledCodeMirror,
  Message,
} from './styled-components';

const TABS = ['db', 'oauth', 'rest', 'wot'];
const DEFAULT_TAB_VALUE = TABS[0];
const OPTIONS = { mode: 'javascript', lineNumbers: true };

class Ip extends React.Component {
  static propTypes = {
    // Redux State
    system: PropTypes.shape({
      db: PropTypes.string.isRequired,
      oauth: PropTypes.string.isRequired,
      rest: PropTypes.string.isRequired,
      wot: PropTypes.string.isRequired,
    }).isRequired,

    // Redux Action
    fetchSystemByType: PropTypes.func.isRequired,
    uploadSystemByType: PropTypes.func.isRequired,
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
  onSaveClick = () => this.props.uploadSystemByType(this.state.tabValue);

  render() {
    const { system, getMessages: t } = this.props;
    const { onCodeMirrorChange, onSaveClick, onTabItemClick } = this;
    const { tabValue } = this.state;
    const code = system[tabValue];
    const isJSON = R.isEmpty(code) || isJSONValidator(code);

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
          value={code}
          onChange={onCodeMirrorChange}
          options={OPTIONS}
          error={!isJSON}
        />

        {!isJSON && <Message color="error">{t('jsonError')}</Message>}

        <StyledButton onClick={isJSON && onSaveClick} disabled={!isJSON}>
          {t('save')}
        </StyledButton>

      </div>
    );
  }
}

export default Ip;
