import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Observable } from 'rxjs/Observable';
import Helmet from 'react-helmet';
import A from 'mcs-lite-ui/lib/A';
import P from 'mcs-lite-ui/lib/P';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';
import DialogConfirm from '../../components/DialogConfirm';
import {
  componentFromStream,
  createEventHandler,
} from '../../utils/recomposeHelper';

const Data = componentFromStream(props$ => {
  const { handler: onResetClick, stream: onResetClick$ } = createEventHandler();
  const { handler: onCancel, stream: onCancel$ } = createEventHandler();
  const { handler: onSubmit, stream: onSubmit$ } = createEventHandler();

  const isDialogShow$ = Observable.merge(
    onResetClick$.mapTo(true),
    onCancel$.mapTo(false),
    onSubmit$.mapTo(false),
  ).startWith(false);

  // Remind: delete Side-effects.
  onSubmit$
    .withLatestFrom(props$, (e, { deleteData, getMessages: t }) =>
      deleteData.bind(null, t('reset.success')),
    )
    .subscribe(R.call);

  return props$.combineLatest(
    isDialogShow$,
    ({ getMessages: t }, isDialogShow) =>
      <div>
        <Helmet><title>{t('dataManagement')}</title></Helmet>
        <DialogConfirm
          show={isDialogShow}
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          <P>{t('reset.confirm1')}</P>
          <P>{t('reset.confirm2')}</P>
        </DialogConfirm>

        <DashboardTitle title={t('dataManagement')}>
          <A onClick={onResetClick}>{t('reset')}</A>
        </DashboardTitle>
        <DashboardDesc>{t('description')}</DashboardDesc>
      </div>,
  );
});

Data.displayName = 'Data';
Data.propTypes = {
  // Redux Action
  deleteData: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Data;
