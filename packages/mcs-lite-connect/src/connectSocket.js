/* eslint no-console: 0 */

import React from 'react';
import createEagerFactory from 'recompose/createEagerFactory';
import createHelper from 'recompose/createHelper';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const emptyFunction = () => {
  console.warn('[mcs-lite-connect] W3CWebSocket is not ready.');
};

/**
 * connectSocket
 *   urlMapper => props => string
 *   onMessage => props => e => void
 *   sendPropsName: string
 *
 * @author Michael Hsu
 */

const connectSocket = (urlMapper, onMessage, sendPropsName) => (BaseComponent) => {
  const factory = createEagerFactory(BaseComponent);

  return class ConnectMCS extends React.Component {
    state = { exposeSenderFunction: emptyFunction };
    componentWillMount = () => this.createWebSocket();
    componentWillReceiveProps = () => this.createWebSocket();
    componentWillUnmount = () => this.close();

    createWebSocket = () => {
      const URL = urlMapper(this.props);
      if (!URL) return; // Hint: deviceId Not Ready.

      if (!this.viewer) {
        this.viewer = new W3CWebSocket(`${URL}/viewer`);
        // this.viewer.onopen = data => console.info('viewer onopen', data);
        // this.viewer.onerror = error => console.info('viewer onerror', error);
        // this.viewer.onclose = data => console.info('viewer onclose', data);
        this.viewer.onmessage = (payload) => {
          const data = JSON.parse(payload.data);
          onMessage(this.props)(data); // Remind: Handle receieve messages.
        };
      }

      if (!this.sender) {
        this.sender = new W3CWebSocket(`${URL}`);
        this.sender.onopen = () =>
          this.setState({ exposeSenderFunction: this.sender.send.bind(this.sender) });
        // this.sender.onerror = error => console.info('sender onerror', error);
        // this.sender.onclose = data => console.info('sender onclose', data);
        // this.sender.onmessage = e => console.info('sender onmessage', e.data);
      }
    }

    close = () => {
      this.viewer.close();
      this.sender.close();
      this.setState({ exposeSenderFunction: emptyFunction });
    }

    render() {
      return factory({
        ...this.props,
        [sendPropsName]: this.state.exposeSenderFunction,
      });
    }
  };
};

export default createHelper(connectSocket, 'connectSocket');
