## 系統管理主控台使用說明
系統管理主控台是一個網頁介面，當您啟動 MCS Lite 應用程式同時會看到管理主控台介面，其主要目的是為了方便您自行維護 MCS Lite 的系統設定，省去手動修改設定檔的時間。在第一次使用 MCS Lite 時，必須先註冊一個管理者帳號，之後皆必須透過此管理者帳號登入主控台，啟動服務或修改相關設定。

系統管理主控台提供有下面幾個功能：

1. 開關服務：啟動與停止 MCS Lite 物聯網平台，當服務停止時，網路上的裝置則無法連線到 MCS Lite。
2. 連線介面列表：也就是 MCS Lite 所運行的電腦的網路位址 (IP) 以及 MCS Lite 服務所綁定的連接埠 (port)，在同個網路內的使用者與裝置則可連線到 IP:port 來使用 MCS Lite 服務。當 MCS Lite 所運行的電腦有不只一張網路卡或是連接上不只一個網路時，您將會看到這些網路位址 (IP) 一一的被列出。
3. 系統管理：修改資料庫 (database)，使用者身份驗證 (OAuth)，網路應用接口 (web APIs) 的服務設定，以下為系統設定檔的詳細說明，在一般的環境下，建議使用預設值，無須特意更改。

| 檔案名稱 | 說明 |
| :--- | :--- |
| db.json | 此為 nedb 連線相關設定，一般情況皆維持預設即可。 |
| oauth.json | 此為 OAuth service 相關設定。在尚無 auto scaling 與 distributed deployment 的需求之前，OAuth service 的 host 與 port（預設 port 為 3000）設定，與 RESTful service 相同即可。另外注意，如果為 production 環境，建議 JWT\_SECRET 不要使用預設的 "superSecret"。 |
| rest.json | 此為 RESTful service 相關設定。設定 MCS Lite API 所要連線的 host 與 port（預設 port 為 3000），如果有更改請務必通知使用者。另外注意，如果為 production 環境, secretKey, prototypeKey, deviceKey, session 請務必改成另外的內容。 |
| stream.json | 此為 streaming service 的參數設定。 |
| wot.json | 此為 WebSocket 的所要連線的 host 與 port（預設 port 為 8000） |

更新上述的檔案之後，請務必重新啟動 MCS Lite 服務以載入最新的設定。

## 更多管理需求
###資料庫說明

除了系統設定，資料的維護也是管理者關注的功能之一，由於 MCS Lite 採用的 NeDB 是一個輕量的 JavaScript 資料庫，所有的資料是以 JSON 檔案的格式儲存，位於 **mcs-lite-app/db** 資料夾下。

| 檔案名稱 | 說明 |
| :--- | :--- |
|datachannels.json|儲存所建立的資料通道。當通道被刪除時，資料依然保存，但 isActive 變成 false|
|datapoints.json|儲存所上傳的資料點。|
|devices.json|儲存所建立的測試裝置。當裝置被刪除時，資料依然保存，但 isActive 變成 false|
|prototypes.json|儲存所建立的產品原型。當原型被刪除時，資料依然保存，但 isActive 變成 false|
|unittypes.json|數值型態的資料通道所要使用的“單位”。系統預設已有 53 個最常用的單位，您也可以在創建資料通道時，自行建立新的度量單位。|
|users.json|儲存系統上所有的使用者資訊。|

更新上述的資料庫檔案之後，請務必重新啟動 MCS Lite 服務以載入最新的資料。

### 資料備份

由於目前產品原型 (Prototype)，測試裝置 (Test Device)，資料通道 (Data Channel)，上傳資料 (Data Channel) 與使用者帳戶 (User Account) 等資料，都是以 JSON 格式儲存在 **mcs-lite-app/db** 資料夾下，備份資料即是把這個資料夾的檔案備份好即可。
