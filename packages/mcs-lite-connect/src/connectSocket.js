/* eslint no-console: 0 */

import React from 'react';
import createEagerFactory from 'recompose/createEagerFactory';
import setDisplayName from 'recompose/setDisplayName';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// ref: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#Ready_state_constants
const CLOSING = 2;

const emptyFunction = () => {
  console.warn('[mcs-lite-connect] W3CWebSocket is not ready.');
};

const setReadyState = (name, websocket) => prevState => ({
  readyState: {
    ...prevState.readyState,
    [name]: websocket.readyState,
  },
});

/**
 * connectSocket
 *   urlMapper => (ownerProps: Object) => string
 *   onMessage => (ownerProps: Object) => datapoint => void
 *   propsMapper => state => props
 *
 * @author Michael Hsu
 */

const connectSocket = (urlMapper, onMessage, propsMapper) => BaseComponent => {
  const factory = createEagerFactory(BaseComponent);
  const initialState = {
    send: emptyFunction, // Remind: Pass this Sender function as props.
    readyState: { viewer: '', sender: '' }, // 0 ~ 3
  };

  class ConnectMCS extends React.Component {
    state = initialState;
    componentWillMount = () => this.createWebSocket();
    componentWillReceiveProps = () => this.createWebSocket();
    componentWillUnmount = () => {
      this.viewer.close();
      this.sender.close();
      this.setState(initialState);
      this.isComponentUnmount = true;
    };
    isComponentUnmount = false; // Hint: To avoid calling setState of unmounted component.

    /**
     * This function will be passed to component as props, so that the consumer
     * could have the controllability of reconnecting.
     *
     * @author Michael Hsu
     */
    createWebSocket = () => {
      const URL = urlMapper(this.props);
      if (!URL) return; // Hint: deviceKey Not Ready.

      if (!this.viewer || this.viewer.readyState >= CLOSING) {
        this.viewer = new W3CWebSocket(`${URL}/viewer`);
        this.viewer.onopen = () =>
          this.setState(setReadyState('viewer', this.viewer));
        this.viewer.onclose = () => {
          if (this.isComponentUnmount) return;
          this.setState(setReadyState('viewer', this.viewer));
        };
        this.viewer.onmessage = payload => {
          const data = JSON.parse(payload.data);
          onMessage(this.props)(data); // Remind: Handle receieve messages.
        };
        this.viewer.onerror = error => console.info('viewer onerror', error);
      }

      if (!this.sender || this.sender.readyState >= CLOSING) {
        this.sender = new W3CWebSocket(`${URL}`);
        this.sender.onopen = () => {
          this.setState({ send: this.sender.send.bind(this.sender) });
          this.setState(setReadyState('sender', this.sender));
        };
        this.viewer.onclose = () => {
          if (this.isComponentUnmount) return;
          this.setState(setReadyState('sender', this.sender));
        };
        this.sender.onmessage = e => console.info('sender onmessage', e.data);
        this.sender.onerror = error => console.info('sender onerror', error);
      }
    };

    render() {
      return factory({
        ...this.props,
        ...propsMapper({
          createWebSocket: this.createWebSocket,
          send: this.state.send,
          readyState: this.state.readyState,
        }),
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'connectSocket'))(
      ConnectMCS,
    );
  }

  return ConnectMCS;
};

export default connectSocket;
