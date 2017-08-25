import { Observable } from 'rxjs/Observable';
import { componentFromStreamWithConfig } from 'recompose/componentFromStream';
import { createEventHandlerWithConfig } from 'recompose/createEventHandler';

export const config = {
  fromESObservable: Observable.from,
  toESObservable: stream => stream,
};

export const componentFromStream = componentFromStreamWithConfig(config);
export const createEventHandler = createEventHandlerWithConfig(config);
