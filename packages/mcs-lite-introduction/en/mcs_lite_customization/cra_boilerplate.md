# Use React to create your user interface

MCS Lite embrace open source, You can develop based on the modules we provide and React of Facebook. In this tutorial, you will learn how to communicate with MCS Lite through WebSocket after a few easy steps:

1.   Build a React project
2.   Use MCS Lite modules
3.   Customize the theme
4.   WebSocket connection configuration

We are also provide extra example [cra-boilerplate](https://github.com/MCS-Lite/cra-boilerplate) as the goal of this tutorial, It covers all the source code in this section, and you can download it directly.

> CRA is the abbreviation of create-react-app .

## Prerequisite
Download Node.js and node package management system：

*   Node v8.4.0
*   npm v5.3.0
*   Yarn v0.27.5

## Build your React project
First, we recommend using **create-react-app**, a open source tool of Facebook, to generate your web application.

```
$ npm install -g create-react-app
$ create-react-app my-app
```

For more information on create-react-app, please refer to the official [Getting Started](https://github.com/facebookincubator/create-react-app#getting-started) and [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) of Facebook.

## Install the MCS Lite modules
Edit **package.json** to add mcs-lite-* related modules into dependencies section.

```json
"dependencies": {
    "mcs-lite-connect": "^0.3.1",
    "mcs-lite-icon": "^0.3.1",
    "mcs-lite-theme": "^0.3.1",
    "mcs-lite-ui": "^0.4.1",
    "styled-components": "^3.1.4"
    ...
}
```

> styled-components is a dependency module of mcs-lite-ui.

You can also install the dependency modules with the following instructions.

```
yarn add mcs-lite-ui mcs-lite-theme mcs-lite-icon mcs-lite-connect styled-components
```

Here are the main function of each MCS Lite modules:

* mcs-lite-theme: Defines the theme for mcs-lite-ui.
* mcs-lite-ui: The main UI components of MCS Lite used on the page, including the operation for each data channel.
* mcs-lite-icon: Transform the SVG icon into a React component.
* mcs-lite-connect: Connect to MCS Lite via WebSocket channel to get the latest data or upload data from/to MCS Lite server.

For more information on the MCS Lite modules, please refer to [MCS Lite readme](https://github.com/MCS-Lite/mcs-lite/blob/master/README.md)。

## Set the theme for the app

include `mcs-lite-theme` module in **src/index.js**

```js
// src/index.js
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

`theme` is the default setting for MCS Lite, and you can also develop your own theme. Please refer to [MCS Lite Theme](http://mcs-lite-ui.netlify.com/?selectedKind=API%20%5Bmcs-lite-theme%5D&selectedStory=%5BJSON%5D%20theme&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel) for more information.


## Build your own components and apps

### Use the DataChannel defined in MCS Lite

The data channel components are defined in `mcs-lite-ui` module. 

In **src/components/MCSSwitch.js**, We used [DataChannelAdapter](http://mcs-lite-ui.netlify.com/?selectedKind=DataChannelAdapter&selectedStory=API&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel) in the mcs-lite-ui to create a `SWITCH_CONTROL` type switch data channel.

```js
// src/components/MCSSwitch.js
import React from 'react';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';

function MCSSwitch({ datachannelId, values, send, onChange }) {
  return (
    <DataChannelAdapter
      dataChannelProps={{
        id: datachannelId,
        type: 'SWITCH_CONTROL',
        values: values,
        format: {},
      }}
      eventHandler={({ id, values }) => {
        const payload = JSON.stringify({ datachannelId: id, values });
        send(payload);
      }}
    />
  );
}
```

### WebSocket connection configuration

Then, we use `mcs-lite-connect` to establish a WebSocket connection to MCS Lite. The **connectSocket** is a design of React Higher-Order Components, please refer to [mcs-lite-connect readme -> API](https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect) for detailed usage.

```js
// src/components/MCSSwitch.js
import { connectSocket } from 'mcs-lite-connect';

// ...

export default connectSocket(
  props => props.url,
  props => datapoint => props.onChange(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);
```

### Construct the main program

In **src/App.js**, construct the web page and provide the value of the address and port of the MCS Lite WebSocket server to be connected，device ID，device key and data channel ID. These parameters are assigned through React props.

```js
// src/App.js
import React, { Component } from 'react';
import MCSSwitch from './components/MCSSwitch';

const DOMAIN = 'ws://0.0.0.0:8000';
const DEVICE_ID = 'S1Mart-9g';
const DEVICE_KEY = '3a4eee2d697dc032334fcd9c1e1597fa2f56cfe8a222501f049dcb26a4e52f80';
const DATACHANNEL_ID = 'switch';

class App extends Component {
  state = { values: {}};
  render() {
    return (
      <MCSSwitch
        datachannelId={DATACHANNEL_ID}
        url={`${DOMAIN}/deviceId/${DEVICE_ID  }/deviceKey/${DEVICE_KEY}`}
        onChange={datapoint =>  this.setState({ values:   datapoint.values })}
        values={this.state.values}
      />
    );
  }
}

export default App;
```

During the development process, you can use the following command to run the application in the development mode, if there is any updates, the page can be refreshed immediately.

```
$ yarn start
```

When the development is complete, you can use the following command to build the application. The output will be located in **build** folder.

```
$ yarn build
```
