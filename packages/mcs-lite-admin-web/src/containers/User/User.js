import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { componentFromStreamWithConfig } from 'recompose/componentFromStream';
import { createEventHandlerWithConfig } from 'recompose/createEventHandler';
import { Observable } from 'rxjs/Observable';
import Helmet from 'react-helmet';
import InputGroup from 'mcs-lite-ui/lib/InputGroup';
import Input from 'mcs-lite-ui/lib/Input';
import Label from 'mcs-lite-ui/lib/Label';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import P from 'mcs-lite-ui/lib/P';
import FormGroup from 'mcs-lite-ui/lib/FormGroup';
import Button from 'mcs-lite-ui/lib/Button';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import A from 'mcs-lite-ui/lib/A';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import IconAdd from 'mcs-lite-icon/lib/IconAdd';
import IconDelete from 'mcs-lite-icon/lib/IconDelete';
import DashboardTitle from '../../components/DashboardTitle';
import DialogConfirm from '../../components/DialogConfirm';
import {
  InputFilterWrapper,
  FooterWrapper,
  StyledCommonDialog,
  TabWrapper,
  RadioWrapper,
} from './styled-components';
import Table from './Table';

const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});
const createEventHandler = createEventHandlerWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});

const CHANGE_PASSWORD = 'changePassword';
const ACCOUNT_STATUS = 'accountStatus';

const User = componentFromStream(props$ => {
  const {
    handler: onAddDialogShow,
    stream: onAddDialogShow$,
  } = createEventHandler();
  const {
    handler: onAddDialogHide,
    stream: onAddDialogHide$,
  } = createEventHandler();
  const {
    handler: onEditDialogShow,
    stream: onEditDialogShow$,
  } = createEventHandler();
  const {
    handler: onEditDialogHide,
    stream: onEditDialogHide$,
  } = createEventHandler();
  const {
    handler: onDeleteDialogShow,
    stream: onDeleteDialogShow$,
  } = createEventHandler();
  const {
    handler: onDeleteDialogHide,
    stream: onDeleteDialogHide$,
  } = createEventHandler();
  const {
    handler: onFilterChange,
    stream: onFilterChange$,
  } = createEventHandler();
  const { handler: onClearClick, stream: onClearClick$ } = createEventHandler();
  const {
    handler: onCheckedListChange,
    stream: onCheckedListChange$,
  } = createEventHandler();
  const {
    handler: onDeleteSubmit,
    stream: onDeleteSubmit$,
  } = createEventHandler();
  const { handler: onAddSubmit, stream: onAddSubmit$ } = createEventHandler();
  const { handler: onEditSubmit, stream: onEditSubmit$ } = createEventHandler();
  const {
    handler: onFormDataChange,
    stream: onFormDataChange$,
  } = createEventHandler();
  const { handler: onTabChange, stream: onTabChange$ } = createEventHandler();
  const {
    handler: onActiveChange,
    stream: onActiveChange$,
  } = createEventHandler();

  const isAddDialogShow$ = Observable.merge(
    onAddDialogShow$.mapTo(true),
    onAddDialogHide$.do(e => e.preventDefault()).mapTo(false),
    onAddSubmit$.mapTo(false),
  ).startWith(false);

  const isEditDialogShow$ = Observable.merge(
    onEditDialogShow$.mapTo(true),
    onEditDialogHide$.do(e => e.preventDefault()).mapTo(false),
    onEditSubmit$.mapTo(false),
  ).startWith(false);

  const isDeleteDialogShow$ = Observable.merge(
    onDeleteDialogShow$.mapTo(true),
    onDeleteDialogHide$.mapTo(false),
    onDeleteSubmit$.mapTo(false),
  ).startWith(false);

  const filterValue$ = Observable.merge(
    onFilterChange$.pluck('target', 'value'),
    onClearClick$.mapTo(''),
  ).startWith('');
  const users$ = props$.pluck('users');
  const checkedList$ = Observable.merge(
    onCheckedListChange$,
    users$.mapTo([]),
  ).startWith([]);
  const data$ = users$.combineLatest(filterValue$, (users, filterValue) =>
    users.filter(user =>
      `${user.email} ${user.userName}`.includes(filterValue),
    ),
  );

  const selectedUserId$ = onEditDialogShow$;
  const selectedTab$ = onTabChange$.startWith(CHANGE_PASSWORD);

  const initialFormData = {
    userName: '',
    email: '',
    password: '',
    newPassword1: '',
    newPassword2: '',
    isActive: true,
  };
  const formData$ = Observable.merge(
    onFormDataChange$.map(e => ({
      [e.target.id]: e.target.value,
    })),
    onActiveChange$.map(e => ({
      isActive: e.target.value === 'true',
    })),
    isAddDialogShow$.filter(e => !!e).mapTo(initialFormData),
    isEditDialogShow$.filter(e => !!e).mapTo(initialFormData),
    selectedUserId$.withLatestFrom(data$, (selectedUserId, data) => ({
      isActive: R.pipe(
        R.find(R.propEq('userId', selectedUserId)),
        R.prop('isActive'),
      )(data),
    })),
  )
    .startWith(initialFormData)
    .scan(R.merge);

  // Remind: There are four fetch Side-effects below.
  props$.first().pluck('fetchUsers').subscribe(R.call);
  onAddSubmit$
    .do(e => e.preventDefault())
    .withLatestFrom(formData$, props$, (e, formData, props) =>
      props.addUser.bind(
        null,
        R.pick(['userName', 'email', 'password'])(formData),
        props.getMessages('addUser.success'),
      ),
    )
    .subscribe(R.call);
  onEditSubmit$
    .do(e => e.preventDefault())
    .withLatestFrom(
      formData$,
      selectedUserId$,
      selectedTab$,
      props$,
      (e, formData, selectedUserId, selectedTab, props) =>
        R.cond([
          [
            R.equals(CHANGE_PASSWORD),
            R.always(
              props.changePasswordById.bind(
                null,
                selectedUserId,
                R.prop('newPassword1')(formData),
                props.getMessages('changePassword.success'),
              ),
            ),
          ],
          [
            R.equals(ACCOUNT_STATUS),
            R.always(
              props.putIsActiveById.bind(
                null,
                selectedUserId,
                R.prop('isActive')(formData),
                props.getMessages('accountStatus.success'),
              ),
            ),
          ],
        ])(selectedTab),
    )
    .subscribe(R.call);
  onDeleteSubmit$
    .withLatestFrom(checkedList$, props$, (e, checkedList, props) =>
      props.deleteUsers.bind(
        null,
        checkedList,
        props.getMessages('deleteUser.success'),
      ),
    )
    .subscribe(R.call);

  return props$.combineLatest(
    data$,
    isAddDialogShow$,
    isEditDialogShow$,
    isDeleteDialogShow$,
    filterValue$,
    checkedList$,
    formData$,
    selectedTab$,
    (
      { getMessages: t },
      data,
      isAddDialogShow,
      isEditDialogShow,
      isDeleteDialogShow,
      filterValue,
      checkedList,
      formData,
      selectedTab,
    ) =>
      <div>
        {/* Title */}
        <Helmet><title>{t('userManagement')}</title></Helmet>
        <DashboardTitle title={t('userManagement')} />

        {/* Dialog - Add user  */}
        <StyledCommonDialog
          component="form"
          show={isAddDialogShow}
          onHide={onAddDialogHide}
          onSubmit={onAddSubmit}
        >
          <header>{t('addUser')}</header>
          <main>
            <FormGroup>
              <Label htmlFor="userName" required>{t('userName')}</Label>
              <Input
                id="userName"
                type="text"
                value={formData.userName}
                onChange={onFormDataChange}
                placeholder={t('userName.placeholder')}
                required
              />
              <Label htmlFor="email" required>{t('email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={onFormDataChange}
                placeholder={t('email.placeholder')}
                required
              />
              <Label htmlFor="password" required>{t('password')}</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={onFormDataChange}
                placeholder={t('password.placeholder')}
                required
              />
            </FormGroup>
          </main>
          <footer>
            <Button kind="default" onClick={onAddDialogHide}>
              {t('cancel')}
            </Button>
            <Button component="input" type="submit" value={t('save')} />
          </footer>
        </StyledCommonDialog>
        {/* Dialog - Edit user  */}
        <StyledCommonDialog
          component="form"
          show={isEditDialogShow}
          onHide={onEditDialogHide}
          onSubmit={onEditSubmit}
        >
          <header>{t('edit')}</header>
          <main>
            <TabWrapper>
              <TabItem
                value="changePassword"
                onClick={(e, value) => onTabChange(value)}
                active={selectedTab === CHANGE_PASSWORD}
              >
                {t('changePassword')}
              </TabItem>
              <TabItem
                value="accountStatus"
                onClick={(e, value) => onTabChange(value)}
                active={selectedTab === ACCOUNT_STATUS}
              >
                {t('accountStatus')}
              </TabItem>
            </TabWrapper>

            {selectedTab === CHANGE_PASSWORD &&
              <FormGroup>
                <Label htmlFor="newPassword1" required>
                  {t('newPassword1')}
                </Label>
                <Input
                  id="newPassword1"
                  type="password"
                  value={formData.newPassword1}
                  onChange={onFormDataChange}
                  placeholder={t('newPassword1.placeholder')}
                  required
                />
                <Label htmlFor="newPassword2" required>
                  {t('newPassword2')}
                </Label>
                <Input
                  id="newPassword2"
                  type="password"
                  value={formData.newPassword2}
                  onChange={onFormDataChange}
                  placeholder={t('newPassword2.placeholder')}
                  required
                />
              </FormGroup>}

            {selectedTab === ACCOUNT_STATUS &&
              <FormGroup>
                <P>{t('accountStatus.desc')}</P>
                <SpaceTop height={10} />

                <RadioWrapper>
                  <P>{t('accountStatus.label')}</P>

                  <label htmlFor="active">
                    <input
                      id="active"
                      type="radio"
                      value="true"
                      onChange={onActiveChange}
                      checked={formData.isActive}
                    />
                    <span>{t('active')}</span>
                  </label>

                  <label htmlFor="inactive">
                    <input
                      id="inactive"
                      type="radio"
                      value="false"
                      onChange={onActiveChange}
                      checked={!formData.isActive}
                    />
                    <span>{t('inactive')}</span>
                  </label>
                </RadioWrapper>
              </FormGroup>}
          </main>
          <footer>
            <Button kind="default" onClick={onEditDialogHide}>
              {t('cancel')}
            </Button>
            <Button component="input" type="submit" value={t('save')} />
          </footer>
        </StyledCommonDialog>
        {/* Dialog - Remove user  */}
        <DialogConfirm
          show={isDeleteDialogShow}
          onCancel={onDeleteDialogHide}
          onSubmit={onDeleteSubmit}
        >
          {t('delete.confirm')}
        </DialogConfirm>

        {/* Filter */}
        <SpaceTop height={20} />
        <InputFilterWrapper>
          <InputGroup>
            <Input
              placeholder={t('inputUsernameEmail')}
              onChange={onFilterChange}
              value={filterValue}
            />
            <Button square><IconSearch size={18} /></Button>
          </InputGroup>
          <A onClick={onClearClick}>{t('clearFilter')}</A>
        </InputFilterWrapper>
        <SpaceTop height={10} />

        {/* Table */}
        <Table
          data={data}
          checkedList={checkedList}
          onCheckedListChange={onCheckedListChange}
          onEditClick={onEditDialogShow}
        />

        {/* Footer */}
        <FooterWrapper>
          {R.isEmpty(checkedList)
            ? <A onClick={onAddDialogShow}>
                <IconAdd size={18} />
                <div>
                  {t('addUser')}
                </div>
              </A>
            : <A onClick={onDeleteDialogShow}>
                <IconDelete size={18} />
                <div>
                  {t('deleteUser', { length: checkedList.length })}
                </div>
              </A>}
        </FooterWrapper>
      </div>,
  );
});

User.displayName = 'User';
User.propTypes = {
  // Redux State
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ).isRequired,

  // Redux Action
  fetchUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  changePasswordById: PropTypes.func.isRequired,
  putIsActiveById: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default User;
