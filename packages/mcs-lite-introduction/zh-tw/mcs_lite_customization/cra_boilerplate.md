# 使用 Create React App 打造專屬的使用者介面

[cra-boilerplate](https://github.com/MCS-Lite/cra-boilerplate) 這個範例是使用 Facebook 推出的 create-react-app 這個開源工具搭配 MCS Lite 的開源模組來打造一個客製化使用者介面。

## 建立你的 create-react-app 專案
首先你要先安裝 create-react-app 並使用它產生你的網頁應用程式（web application）

```
npm install -g create-react-app
create-react-app my-mcs-lite-cra
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
    "normalize.css": "^7.0.0",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "styled-components": "^2.0.0"
```
也可以透過下列指令來安裝相依性套件。

```
yarn add mcs-lite-ui mcs-lite-theme mcs-lite-icon mcs-lite-connect
```
* mcs-lite-connect: 透過 WebSocket 通道與 MCS Lite 連線，以即時獲取通道的最新數據或上傳資料點。
* mcs-lite-icon: 將 SVG 圖示轉成 React 元件。
* mcs-lite-theme: 定義 mcs-lite-ui 的介面主題。
* mcs-lite-ui: MCS Lite 頁面上主要使用的 UI 元件，包括各個資料通道的操作按鈕。

更多有關 MCS Lite 套件的資訊，請參考 [MCS Lite readme](https://github.com/MCS-Lite/mcs-lite/blob/master/README.md)。

## 設定應用程式的介面主題
先透過下列指令來安裝 normalize.css 這個套件。此套件提供了跨瀏覽器的 HTML 元素樣式，

```
yarn add normalize.css
```
接著在 src/index.js 引入此套件

```js
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## 打造自己的元件與應用程式
[cra-boilerplate](https://github.com/MCS-Lite/cra-boilerplate) 這個範例中，我們使用了 mcs-lite-* 相關套件建立了資料通道（data channel）的操作卡片元件，之後就可以在頁面上引入這個元件來操作裝置的資料通道囉。

在 **src/components/MCSSwitch.js** 中，我們使用到了 mcs-lite-ui 中的 DataChannelAdapter 來建立一個 type = SWITCH_CONTROL 的開關類型資料通道，也使用到了 mcs-lite-connect 來建立與 MCS Lite 的 WebSocket 連線。

接著在 **src/App.js** 中，建構頁面並同時給定所要連線的 MCS Lite WebSocket 服務器的位址與連接埠，device ID，device key 與資料通道 ID。

```
const DOMAIN = 'ws://0.0.0.0:8000';
const DEVICE_ID = 'S1Mart-9g';
const DEVICE_KEY = '3a4eee2d697dc032334fcd9c1e1597fa2f56cfe8a222501f049dcb26a4e52f80';
const DATACHANNEL_ID = 'switch';
```
在開發的過程當中，你可以使用下列指令執行開發模式的應用程式，若有任何更新，頁面可以即時的刷新。

```
yarn start
```
當開發完成後，可以使用下列指令來建置應用程式。產生出來的應用會放置於 build 目錄底下。

```
yarn build
```
