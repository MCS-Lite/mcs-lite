## 系統管理主控台使用說明

請注意，由於目前 Beta 版尚未有系統管理主控台圖形化介面，因此必須透過直接修改設定檔的方式來進行系統設定，相關的設定檔位於 **mcs-lite-app** 資料夾下。

#### Windows 作業系統![](../assets/win.png)

#### Mac OS X 作業系統![](../assets/mac.png)


### 系統設定檔說明
在 **mcs-lite-app/config** 資料夾下，存有與系統連線相關的設定檔案，其檔案格式皆為 JSON。

| 檔案名稱 | 說明 |
| :--- | :--- |
| db.json | 此為 nedb 連線相關設定，一般情況皆維持預設即可。 |
| oauth.json | 此為 OAuth service 相關設定。在尚無 Auto Scaling 與 Distributed Deployment 的需求之前，OAuth service 的 host 與 port（預設 port 為 3000）設定，與 RESTful service 相同即可。另外注意，如果為 production 環境，建議 JWT\_SECRET 不要使用預設的 "superSecret"。 |
| rest.json | 此為 RESTful service 相關設定。設定 MCS Lite API 所要連線的 host 與 port（預設 port 為 3000），如果有更改請務必通知使用者。另外注意，如果為 production 環境, secretKey, prototypeKey, deviceKey, session 請務必改成另外的內容。 |
| stream.json | 此為 streaming service 的參數設定。 |
| wot.json | 此為 WebSocket 的所要連線的 host 與 port（預設 port 為 8000） |

更新上述的檔案之後，請務必重新啟動 **mcs-lite-app** 執行檔以載入最新的設定。

### 資料庫說明
在 **mcs-lite-app/db** 資料夾下即是 **nedb** 所存的所有資料，其檔案格式皆為 JSON。

| 檔案名稱 | 說明 |
| :--- | :--- |
|datachannels.json|儲存所建立的資料通道。當通道被刪除時，資料依然保存，但 isActive 變成 false|
|datapoints.json|儲存所上傳的資料點。|
|devices.json|儲存所建立的測試裝置。當裝置被刪除時，資料依然保存，但 isActive 變成 false|
|prototypes.json|儲存所建立的產品原型。當原型被刪除時，資料依然保存，但 isActive 變成 false|
|unittypes.json|數值型態的資料通道所要使用的“單位”。系統預設已有 53 個最常用的單位，您也可以在創建資料通道時，自行建立新的度量單位。|
|users.json|儲存系統上所有的使用者資訊，在管理介面尚未釋出前，可手動將 isAdmin 改成 true，將使用者提升為管理者。|

更新上述的資料庫檔案之後，請務必重新啟動 **mcs-lite-app** 執行檔以載入最新的資料。

### 資料備份

由於目前產品原型 (Prototype)，測試裝置 (Test Device)，資料通道 (Data Channel)，上傳資料 (Data Channel) 與使用者帳戶 (User Account) 等資料，都是以 JSON 格式儲存在 **mcs-lite-app/db** 資料夾下，備份資料即是把這個資料夾的檔案備份好即可。
