import { Observable } from 'rxjs/Observable';
import { componentFromStreamWithConfig } from 'recompose/componentFromStream';
import { createEventHandlerWithConfig } from 'recompose/createEventHandler';

export const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});
export const createEventHandler = createEventHandlerWithConfig({
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
});
