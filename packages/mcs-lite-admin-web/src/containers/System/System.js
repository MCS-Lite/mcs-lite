import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Helmet from 'react-helmet';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import A from 'mcs-lite-ui/lib/A';
import isJSONValidator from 'validator/lib/isJSON';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';
import DialogConfirm from '../../components/DialogConfirm';
import {
  StyledButton,
  TabWrapper,
  StyledLoadableCodeMirror,
  Message,
} from './styled-components';

const TABS = ['db', 'oauth', 'rest', 'wot'];
export const DEFAULT_TAB_VALUE = 'db';
const OPTIONS = { mode: 'javascript', lineNumbers: true };

class System extends React.Component {
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
    postReset: PropTypes.func.isRequired,
    setSystemByType: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };
  state = { tabValue: DEFAULT_TAB_VALUE, isDialogShow: false };
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
  onResetClick = () => this.setState({ isDialogShow: true });
  onCancel = () => this.setState({ isDialogShow: false });
  onSubmit = () => {
    this.props.postReset(this.props.getMessages('reset.success'));
    this.setState({ isDialogShow: false });
  };
  render() {
    const { system, getMessages: t } = this.props;
    const {
      onCodeMirrorChange,
      onSaveClick,
      onTabItemClick,
      onResetClick,
      onCancel,
      onSubmit,
    } = this;
    const { tabValue, isDialogShow } = this.state;
    const code = system[tabValue];
    const isJSON = R.isEmpty(code) || isJSONValidator(code);

    return (
      <div>
        <Helmet><title>{t('systemManagement')}</title></Helmet>
        <DialogConfirm
          show={isDialogShow}
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          {t('reset.confirm')}
        </DialogConfirm>

        <DashboardTitle title={t('systemManagement')}>
          <A onClick={onResetClick}>{t('reset')}</A>
        </DashboardTitle>
        <DashboardDesc>{t('description')}</DashboardDesc>

        <TabWrapper>
          {TABS.map(value =>
            <TabItem
              key={value}
              value={value}
              onClick={onTabItemClick}
              active={tabValue === value}
            >
              {value}.json
            </TabItem>,
          )}
        </TabWrapper>

        <StyledLoadableCodeMirror
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

export default System;
