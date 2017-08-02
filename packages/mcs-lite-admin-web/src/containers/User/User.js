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
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import IconAdd from 'mcs-lite-icon/lib/IconAdd';
import IconDelete from 'mcs-lite-icon/lib/IconDelete';
import DashboardTitle from '../../components/DashboardTitle';
import DialogConfirm from '../../components/DialogConfirm';
import { InputFilterWrapper, FooterWrapper } from './styled-components';
import Dialog from './Dialog';
import Table from './Table';

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
    handler: onAddDialogShow,
    stream: onAddDialogShow$,
  } = createEventHandler();
  const {
    handler: onAddDialogHide,
    stream: onAddDialogHide$,
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
  const { handler: onEditClick, stream: onEditClick$ } = createEventHandler();

  const isAddDialogShow$ = Observable.merge(
    onAddDialogShow$.mapTo(true),
    onAddDialogHide$.mapTo(false),
  ).startWith(false);

  const isDeleteDialogShow$ = Observable.merge(
    onDeleteDialogShow$.mapTo(true),
    onDeleteDialogHide$.mapTo(false),
  ).startWith(false);

  const filterValue$ = Observable.merge(
    onFilterChange$.pluck('target', 'value'),
    onClearClick$.mapTo(''),
  ).startWith('');
  const checkedList$ = onCheckedListChange$.startWith([]);
  const data$ = props$
    .pluck('users')
    .combineLatest(filterValue$, (users, filterValue) =>
      users.filter(user =>
        `${user.email} ${user.userName}`.includes(filterValue),
      ),
    );

  // Remind: There are four fetch Side-effects below.
  props$.first().pluck('fetchUsers').subscribe(R.call);
  onEditClick$.do(console.log).subscribe();

  return props$.combineLatest(
    data$,
    isAddDialogShow$,
    isDeleteDialogShow$,
    filterValue$,
    checkedList$,
    (
      { getMessages: t },
      data,
      isAddDialogShow,
      isDeleteDialogShow,
      filterValue,
      checkedList,
    ) =>
      <div>
        {/* Title */}
        <Helmet><title>{t('userManagement')}</title></Helmet>
        <DashboardTitle title={t('userManagement')} />

        {/* Dialog - Add user  */}
        <Dialog show={isAddDialogShow} onHide={onAddDialogHide}>
          <div style={{ height: 3000 }}>123</div>
        </Dialog>
        <DialogConfirm
          show={isDeleteDialogShow}
          onCancel={onDeleteDialogHide}
          onSubmit={() => console.log('onSubmit')}
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
          onEditClick={onEditClick}
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
