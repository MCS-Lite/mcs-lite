import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createEventHandler, componentFromStream } from 'recompose';
import R from 'ramda';
import copyToClipboard from 'copy-to-clipboard';
import MorphReplace from 'react-svg-morph/lib/MorphReplace';
import { IconLoading, IconDone } from 'mcs-lite-icon';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/merge';
import Button from '../Button';
import rotate360 from '../Spin/rotate360';

const DEFAULT = 'default';
const LOADING = 'loading';
const SUCCESS = 'success';

export const StyledButton = styled(Button)`
  width: 42px;

  > div {
    transform-origin: center center;
    animation: ${props => (props.status === LOADING ? `${rotate360} 0.6s infinite cubic-bezier(0.41, 0.01, 0.58, 1)` : 'none')};
  }

  path {
    fill: currentColor;
  }
`;

export const getStatusStream = (
  source$,
  t1 = 500,
  t2 = 1800,
  scheduler = async,
) =>
  source$
    .switchMapTo(
      Observable.merge(
        Observable.of(LOADING),
        Observable.of(SUCCESS).delay(t1, scheduler),
        Observable.of(DEFAULT).delay(t2, scheduler),
      ),
    )
    .startWith(DEFAULT);

const omitProps = R.omit(['text']);

const CopyButton = componentFromStream(propStream => {
  const props$ = Observable.from(propStream);
  const { handler: onClick, stream: onClickStream } = createEventHandler();

  const text$ = props$.pluck('text');
  const onClick$ = Observable.from(onClickStream);
  const status$ = getStatusStream(onClick$);

  // Remind: copyToClipboard Side-effects
  onClick$
    .withLatestFrom(text$, (status, text) => text)
    .do(copyToClipboard)
    .subscribe();

  return props$.combineLatest(
    status$,
    ({ children, ...otherProps }, status) => (
      <StyledButton
        {...omitProps(otherProps)}
        size="small"
        status={status}
        onClick={onClick}
      >
        <div>
          {status === DEFAULT
            ? children
            : <MorphReplace width={10} height={10}>
                {status === LOADING
                  ? <IconLoading key="loading" />
                  : <IconDone key="success" />}
              </MorphReplace>}
        </div>
      </StyledButton>
    ),
  );
});

CopyButton.displayName = 'CopyButton';
CopyButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CopyButton;
