# 使用 Create React App 打造專屬的使用者介面

MCS Lite 擁抱開源，您可以基於我們所提供的模組以及 Facebook 的 React 進行開發，在這篇教學中，會從建立專案開始經過簡易幾個步驟後，最終透過 Websocket 與 MCS Lite 進行雙向構通。過程中主要將會提到：
1.   建立專案
2.   使用 MCS Lite 模組
3.   客製化主題
4.   Websocket 連線配置

我們也額外提供 [cra-boilerplate](https://github.com/MCS-Lite/cra-boilerplate) 做為本篇教學的目標，其涵蓋本篇所有完整的範例程式碼，您也可以下載直接使用。

> CRA 名稱為 create-react-app 縮寫。

## 前置作業
下載 Node.js 以及套件管理系統：

*   Node v8.4.0
*   NPM v5.3.0
*   YARN v0.27.5

## 建立你的 React 專案
首先我們推薦使用 Facebook 推出的 create-react-app 開源工具產生你的網頁應用程式（Web application）

```
$ npm install -g create-react-app
$ create-react-app my-app
```

更多有關 create-react-app 的介紹，請參考 Facebook 官方的 [Getting Started](https://github.com/facebookincubator/create-react-app#getting-started) 與 [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)。

## 安裝 MCS Lite 套件
在 create-react-app 專案目錄下的 **package.json** 檔案中的 dependencies 加入 mcs-lite-* 相關的套件。

```json
"dependencies": {
    "mcs-lite-connect": "^0.3.1",
    "mcs-lite-icon": "^0.3.1",
    "mcs-lite-theme": "^0.3.1",
    "mcs-lite-ui": "^0.4.1",
    "styled-components": "^2.0.0"
    ...
}
```

> 其中 styled-components 為 MCS Lite UI 套件的 dependency。

也可以透過下列指令來安裝相依性套件。

```
yarn add mcs-lite-ui mcs-lite-theme mcs-lite-icon mcs-lite-connect styled-components
```

在 MCS Lite 模組應用依功能性主要有：

* mcs-lite-theme: 定義 mcs-lite-ui 的介面主題。
* mcs-lite-ui: MCS Lite 頁面上主要使用的 UI 元件，包括各個資料通道的操作按鈕。
* mcs-lite-icon: 將 SVG 圖示轉成 React 元件。
* mcs-lite-connect: 透過 WebSocket 通道與 MCS Lite 連線，以即時獲取通道的最新數據或上傳資料點。

更多有關 MCS Lite 套件的資訊，請參考 [MCS Lite readme](https://github.com/MCS-Lite/mcs-lite/blob/master/README.md)。

## 設定應用程式的介面主題

在 **src/index.js** 也就是程式碼的進入點引入 `mcs-lite-theme` 套件進行配置

```js
// src/index.js
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

其中 `theme` 物件為 MCS Lite 預設的配置，你也可以制定你專屬的主題，格式請參照 [MCS Lite Theme](http://mcs-lite-ui.netlify.com/?selectedKind=API%20%5Bmcs-lite-theme%5D&selectedStory=%5BJSON%5D%20theme&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel)。


## 打造自己的元件與應用程式

### 使用 MCS Lite 所定義的 DataChannel

我們在 `mcs-lite-ui` 套件中，定義了資料通道（data channel）的元件，之後可以在頁面上引入這個元件來操作裝置的資料通道。

在 **src/components/MCSSwitch.js** 中，我們使用到了 mcs-lite-ui 中的 [DataChannelAdapter](http://mcs-lite-ui.netlify.com/?selectedKind=DataChannelAdapter&selectedStory=API&full=0&down=0&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel) 來建立一個 `SWITCH_CONTROL` 型態的開關類型資料通道。

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

### Websocket 連線設定

接著使用到了 `mcs-lite-connect` 來建立與 MCS Lite 的 WebSocket 連線，其中 connectSocket 為 React Higher-Order Components 的設計，請參考 [mcs-lite-connect 文件 API](https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect) 使用。

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

最後在 **src/App.js** 中，建構頁面並同時給定所要連線的 MCS Lite WebSocket 服務器的位址與連接埠，device ID，device key 與資料通道 ID 透過 React props 進行傳遞。

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
在開發的過程當中，你可以使用下列指令執行開發模式的應用程式，若有任何更新，頁面可以即時的刷新。

```
$ yarn start
```
當開發完成後，可以使用下列指令來建置應用程式。產生出來的應用會放置於 build 目錄底下。

```
$ yarn build
```
