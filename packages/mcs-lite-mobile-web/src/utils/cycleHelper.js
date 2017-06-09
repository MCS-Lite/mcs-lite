import { Observable } from 'rxjs/Observable';
import R from 'ramda';

// ref: https://github.com/whitecolor/cycle-async-driver

// ingore error
export const success = r$ => r$.catch(() => Observable.empty());

// ingore success
export const failure = r$ => r$.skip().catch(error => Observable.of(error));

export const exist = R.complement(R.isNil);
export const accessTokenSelector$ = state$ =>
  state$
    .pluck('auth', 'access_token')
    .filter(exist) // Hint: will wait for accessToken avaliable.
    .distinctUntilChanged();
