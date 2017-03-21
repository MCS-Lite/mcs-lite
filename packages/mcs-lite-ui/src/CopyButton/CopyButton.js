import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { createEventHandler, componentFromStream } from 'recompose';
import R from 'ramda';
import copyToClipboard from 'copy-to-clipboard';
import MorphReplace from 'react-svg-morph/lib/MorphReplace';
import { IconLoading, IconDone } from 'mcs-lite-icon';
import { Observable } from 'rxjs/Observable';
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

const StyledButton = styled(Button)`
  width: 42px;

  svg {
    transform-origin: center center;
    animation: ${props => props.status === LOADING
      ? `${rotate360} 0.6s infinite cubic-bezier(0.41, 0.01, 0.58, 1)`
      : 'none'
    };
  }

  path {
    fill: currentColor;
  }
`;

const omitProps = R.omit(['text']);

const CopyButton = componentFromStream((propStream) => {
  const props$ = Observable.from(propStream);
  const { handler: onClick, stream: onClickStream } = createEventHandler();

  const text$ = props$.pluck('text');
  const status$ = Observable.from(onClickStream)
    .withLatestFrom(text$, (e, text) => text)
    .do(copyToClipboard)
    .switchMapTo(Observable.merge(
      Observable.of(LOADING),
      Observable.of(SUCCESS).delay(500),
      Observable.of(DEFAULT).delay(1800),
    ))
    .startWith(DEFAULT);

  return props$.combineLatest(status$, ({ children, ...otherProps }, status) =>
    <StyledButton
      {...omitProps(otherProps)}
      size="small"
      status={status}
      onClick={onClick}
    >
      {
        status === DEFAULT
          ? children
          : (
            <MorphReplace width={10} height={10}>
              {status === LOADING
                ? <IconLoading key="loading" />
                : <IconDone key="success" />
              }
            </MorphReplace>
          )
      }
    </StyledButton>,
  );
});

CopyButton.displayName = 'CopyButton';
CopyButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CopyButton;
