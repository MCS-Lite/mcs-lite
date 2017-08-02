import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { componentFromStreamWithConfig } from 'recompose/componentFromStream';
import { createEventHandlerWithConfig } from 'recompose/createEventHandler';
import { Observable } from 'rxjs/Observable';
import Helmet from 'react-helmet';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import Input from 'mcs-lite-ui/lib/Input';
import Button from 'mcs-lite-ui/lib/Button';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import A from 'mcs-lite-ui/lib/A';
import Table from 'mcs-lite-ui/lib/Table';
import MobileFixedFooter from 'mcs-lite-ui/lib/MobileFixedFooter';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import IconAdd from 'mcs-lite-icon/lib/IconAdd';
import isJSONValidator from 'validator/lib/isJSON';
import DashboardTitle from '../../components/DashboardTitle';
import DialogConfirm from '../../components/DialogConfirm';
import { InputFilterWrapper, FooterWrapper } from './styled-components';
import Dialog from './Dialog';

const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});
const createEventHandler = createEventHandlerWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});

const User = componentFromStream(props$ => {
  const {
    handler: onTabItemClick,
    stream: onTabItemClick$,
  } = createEventHandler();
  const {
    handler: onCodeMirrorChange,
    stream: onCodeMirrorChange$,
  } = createEventHandler();
  const { handler: onSaveClick, stream: onSaveClick$ } = createEventHandler();
  const { handler: onResetClick, stream: onResetClick$ } = createEventHandler();
  const { handler: onCancel, stream: onCancel$ } = createEventHandler();
  const {
    handler: onAddDialogShow,
    stream: onAddDialogShow$,
  } = createEventHandler();
  const {
    handler: onAddDialogHide,
    stream: onAddDialogHide$,
  } = createEventHandler();
  const {
    handler: onFilterChange,
    stream: onFilterChange$,
  } = createEventHandler();

  const isAddDialogShow$ = Observable.merge(
    onAddDialogShow$.mapTo(true),
    onAddDialogHide$.mapTo(false),
  ).startWith(false);

  // Remind: There are four fetch Side-effects below.
  props$
    .first()
    .pluck('fetchUsers')
    .subscribe(R.call);

  return props$.combineLatest(
    isAddDialogShow$,
    ({ getMessages: t, users }, isAddDialogShow) =>
      <div>
        {/* Title */}
        <Helmet><title>{t('userManagement')}</title></Helmet>
        <DashboardTitle title={t('userManagement')} />

        {/* Dialog - Add user  */}
        <Dialog show={isAddDialogShow} onHide={onAddDialogHide}>
          <div style={{ height: 3000 }}>123</div>
        </Dialog>

        {/* Filter */}
        <SpaceTop height={20} />
        <InputFilterWrapper>
          <InputGroup>
            <Input
              placeholder={t('inputUsernameEmail')}
              onChange={onFilterChange}

            />
            <Button square><IconSearch size={18} /></Button>
          </InputGroup>
          <A>{t('clearFilter')}</A>
        </InputFilterWrapper>
        <SpaceTop height={10} />

        {/* Table */}
        {/* <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                {t('name')}
              </th>
              <th>
                {t('email')}
              </th>
              <th>{''}</th>
            </tr>
          </thead>
        </Table> */}
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                {t('name')}
              </th>
              <th>
                {t('email')}
              </th>
              <th>{''}</th>
            </tr>
          </thead>
          <tbody>
            {users.map(e =>
              <tr key={e.userId}>
                <th>
                  <input type="checkbox" />
                </th>
                <td>
                  {e.userName}
                </td>
                <td>
                  {e.email}
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* Footer */}
        <FooterWrapper>
          <A onClick={onAddDialogShow}>
            <IconAdd size={18} />
            <div>
              {t('addUser')}
            </div>
          </A>
        </FooterWrapper>
      </div>,
  );
});

User.displayName = 'User';
User.propTypes = {
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

export default User;
