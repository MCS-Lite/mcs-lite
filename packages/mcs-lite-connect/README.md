# mcs-lite-connect
> Connect MCS with WebSocket.

## Installation

```console
$ npm i mcs-lite-connect --save
```

## Usage

`connectSocket` is a higher-order components based on [recompose](https://github.com/acdlite/recompose) and [W3CWebSocket](https://github.com/theturtle32/WebSocket-Node). It will handle websocket lifecycle for your React component.

```js
import { connectSocket } from 'mcs-lite-connect';

const Component = connectSocket(
  // 1. urlMapper => (ownerProps: Object) => string
  props =>
    'ws://localhost:8000/deviceId/12345/deviceKey/' + props.key,
  
  // 2. onMessage => (ownerProps: Object) => datapoint => void
  props =>
    datapoint => props.setDatapoint(props.deviceId, datapoint),
  
  // 3. propsMapper => state => props
  ({ readyState, send, createWebSocket }) => ({
    send,
    isWebSocketClose: readyState.sender === 3,
    reconnect: createWebSocket,
  }),
)(BaseComponent),

```

## API

### `urlMapper => (ownerProps: Object) => string`

  Set the **URL** to be connected. There are two connections:
  
  - *Sender* : The **Send-Only** connection via `${URL}`.
  - *Viewer* : The **Read-Only** connection via `${URL}/viewer`.

### `onMessage => (ownerProps: Object) => datapoint => void`
  
  The **callback function** of *Viewer*. It will be invoked   when receiving messages (*datapoint*) from the server.

### `propsMapper => state => props`
  
  A function that maps **internal state** to a new collection of props that are passed to the base component. There are three states:
  
  - `send(payload: String)` : Immediately sends the specified payload (*datapoint*) to server.
  - `readyState`: [Ready state constants](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#Ready_state_constants).
  - `createWebSocket`: A convenience function for reconnecting.

## Inspired by

-   [react-websocket-view](https://github.com/jollen/react-websocket-view)
