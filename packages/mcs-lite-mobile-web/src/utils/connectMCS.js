/* eslint no-console: 0 */

import React from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';


/**
 * connectMCS
 *   propsName: string
 *   urlMapper => props => string
 *   onMessage => props => e => void
 *
 * @author Michael Hsu
 */

const connectMCS = (propsName, urlMapper, onMessage) => BaseComponent =>
  class ConnectMCS extends React.Component {
    state = { exposeSenderFunction: null };
    componentWillMount = () => this.createWebSocket();
    componentWillReceiveProps = () => this.createWebSocket();
    componentWillUnmount = () => this.close();

    createWebSocket = () => {
      const URL = urlMapper(this.props);
      if (!URL) return; // Hint: deviceId Not Ready.

      if (!this.viewer) {
        this.viewer = new W3CWebSocket(`${URL}/viewer`);
        this.viewer.onopen = data => console.info('viewer onopen', data);
        this.viewer.onerror = error => console.info('viewer onerror', error);
        this.viewer.onclose = data => console.info('viewer onclose', data);
        this.viewer.onmessage = e => onMessage(this.props)(e); // Remind: Handle receieve messages.
      }

      if (!this.sender) {
        this.sender = new W3CWebSocket(`${URL}`);
        this.sender.onopen = () =>
          this.setState({ exposeSenderFunction: this.sender.send.bind(this.sender) });
        this.sender.onerror = error => console.info('sender onerror', error);
        this.sender.onclose = data => console.info('sender onclose', data);
        this.sender.onmessage = e => console.info('sender onmessage', e.data);
      }
    }

    close = () => {
      this.viewer.close();
      this.sender.close();
      this.setState({ exposeSenderFunction: null });
    }

    render() {
      return React.createElement(BaseComponent, {
        ...this.props,
        [propsName]: this.state.exposeSenderFunction,
      });
    }
  };

export default connectMCS;
