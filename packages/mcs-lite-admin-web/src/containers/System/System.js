import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { componentFromStreamWithConfig } from 'recompose/componentFromStream';
import { createEventHandlerWithConfig } from 'recompose/createEventHandler';
import { Observable } from 'rxjs/Observable';
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

const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});
const createEventHandler = createEventHandlerWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});

const System = componentFromStream(props$ => {
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
  const { handler: onSubmit, stream: onSubmit$ } = createEventHandler();

  const tabValue$ = onTabItemClick$
    .map(value => value)
    .startWith(DEFAULT_TAB_VALUE)
    .distinctUntilChanged();

  const code$ = tabValue$
    .combineLatest(props$, (tabValue, { system }) => system[tabValue])
    .startWith('');

  const isJSON$ = code$.map(R.anyPass([R.isEmpty, isJSONValidator]));

  const isDialogShow$ = Observable.merge(
    onResetClick$.mapTo(true),
    onCancel$.mapTo(false),
    onSubmit$.mapTo(false),
  ).startWith(false);

  // Remind: There are four fetch Side-effects below.
  tabValue$
    .combineLatest(props$, (tabValue, { fetchSystemByType }) =>
      fetchSystemByType.bind(null, tabValue),
    )
    .subscribe(R.call);
  onCodeMirrorChange$
    .withLatestFrom(tabValue$, props$, (value, tabValue, { setSystemByType }) =>
      setSystemByType.bind(null, { data: value, type: tabValue }),
    )
    .subscribe(R.call);
  onSaveClick$
    .withLatestFrom(
      tabValue$,
      props$,
      (e, tabValue, { uploadSystemByType, getMessages: t }) =>
        uploadSystemByType.bind(null, tabValue, t('save.success')),
    )
    .subscribe(R.call);
  onSubmit$
    .withLatestFrom(props$, (e, { postReset, getMessages: t }) =>
      postReset.bind(null, t('reset.success')),
    )
    .subscribe(R.call);

  const onTabItemClickValue = (e, value) => onTabItemClick(value);

  return props$.combineLatest(
    tabValue$,
    code$,
    isJSON$,
    isDialogShow$,
    ({ getMessages: t }, tabValue, code, isJSON, isDialogShow) =>
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
              onClick={onTabItemClickValue}
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
      </div>,
  );
});

System.displayName = 'System';
System.propTypes = {
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

export default System;
