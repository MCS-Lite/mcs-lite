# 使用 React 打造专属的使用者介面

MCS Lite 拥抱开源，您可以基于我们所提供的模组以及 Facebook 的 React 进行开发，在这篇教学中，会从建立专案开始经过简易几个步骤后，最终透过 WebSocket 与 MCS Lite 进行双向沟通。过程中主要将会提到：

1.   建立专案
2.   使用 MCS Lite 模组
3.   定制化主题
4.   WebSocket 连线配置

我们也额外提供 [cra-boilerplate](https://github.com/MCS-Lite/cra-boilerplate) 做为本篇教学的目标，其涵盖本篇所有完整的范例程式码，您也可以下载直接使用。

> CRA 为 create-react-app 缩写。

## 前置作业
下载 Node.js 以及套件管理系统：

*   Node v8.4.0
*   npm v5.3.0
*   Yarn v0.27.5

## 建立你的 React 专案
首先我们推荐使用 Facebook 推出的 create-react-app 开源工具产生你的网页应用程式（Web application）。

```
$ npm install -g create-react-app
$ create-react-app my-app
```

更多有关 create-react-app 的介绍，请参考 Facebook 官方的 [Getting Started](https://github.com/facebookincubator/create-react-app#getting-started) 与 [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)。

## 安装 MCS Lite 套件
在 create-react-app 专案目录下的 **package.json** 档案中的 dependencies 加入 mcs-lite-* 相关的套件。

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

> 其中 styled-components 为 mcs-lite-ui 套件的相依性套件（dependency）。

也可以透过下列指令来安装相依性套件。

```
yarn add mcs-lite-ui mcs-lite-theme mcs-lite-icon mcs-lite-connect styled-components
```

在 MCS Lite 模组应用依功能性主要有：

* mcs-lite-theme: 定义 mcs-lite-ui 的介面主题。
* mcs-lite-ui: MCS Lite 页面上主要使用的 UI 元件，包括各个资料通道的操作按钮。
* mcs-lite-icon: 将 SVG 图示转成 React 元件。
* mcs-lite-connect: 透过 WebSocket 通道与 MCS Lite 连线，以即时获取通道的最新数据或上传资料点。

更多有关 MCS Lite 套件的资讯，请参考 [MCS Lite readme](https://github.com/MCS-Lite/mcs-lite/blob/master/README.md)。

## 设定应用程式的介面主题

在 **src/index.js** 也就是程式码的进入点引入 `mcs-lite-theme` 套件进行配置

```js
// src/index.js
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

其中 `theme` 物件为 MCS Lite 预设的配置，你也可以制定你专属的主题，格式请参照 [MCS Lite Theme](http://mcs-lite-ui.netlify.com/?selectedKind=API%20%5Bmcs-lite-theme%5D&selectedStory=%5BJSON%5D%20theme&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel)。


## 打造自己的元件与应用程式

### 使用 MCS Lite 所定义的 DataChannel

我们在 `mcs-lite-ui` 套件中，定义了资料通道（data channel）的元件，之后可以在页面上引入这个元件来操作装置的资料通道。

在 **src/components/MCSSwitch.js** 中，我们使用到了 mcs-lite-ui 中的 [DataChannelAdapter](http://mcs-lite-ui.netlify.com/?selectedKind=DataChannelAdapter&selectedStory=API&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel) 来建立一个 `SWITCH_CONTROL` 型态的开关类型资料通道。

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

### WebSocket 连线设定

接着使用到了 `mcs-lite-connect` 来建立与 MCS Lite 的 WebSocket 连线，其中 connectSocket 为 React Higher-Order Components 的设计，请参考 [mcs-lite-connect README -> API](https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect) 的使用方法。

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

### 主程式配置

最后在 **src/App.js** 中，建构页面并同时给定所要连线的 MCS Lite WebSocket 服务器的位址与连接埠，device ID，device key 与资料通道 ID 透过 React props 进行传递。

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

在开发的过程当中，你可以使用下列指令执行开发模式的应用程式，若有任何更新，页面可以即时的刷新。

```
$ yarn start
```

当开发完成后，可以使用下列指令来建置应用程式。产生出来的应用会放置于 build 目录底下。

```
$ yarn build
```
