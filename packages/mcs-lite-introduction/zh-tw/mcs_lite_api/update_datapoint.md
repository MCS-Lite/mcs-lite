## 上傳資料

### WebSocket

#### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey
```

範例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f
```

#### 請求內文（Request Body）

* 內文為標準的 **JSON** 格式。
* 針對只會產生一筆資料的通道，像是開關、整數、浮點數、十六進位值、字串、GPIO 等，其上傳的格式為

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload

{"datachannelId":"$dataChannelID","values":{"value":$value}}
```

範例

```json
{"datachannelId":"control_integer","values":{"value":91}}
```

* 針對會同時產生多筆資料的通道，像是 PWM，其上傳格式如下。當然，您也可以只上傳其中一個數據。

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload
// please change $period to the real period you are going to upload


{"datachannelId":"$dataChannelID","values":{"value":"$value", "period":"$period"}}
{"datachannelId":"$dataChannelID","values":{"value":"$value"}}
{"datachannelId":"$dataChannelID","values":{"period":"$period"}}
```

範例

```json
{"datachannelId":"control_pwm","values":{"value":"205","period":"10"}}
```

### HTTP

#### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datapoint.csv
```

範例

```
http://192.168.0.100:3000/api/devices/BJlQmdbQ0l/datapoints.csv
```

#### 請求方法（Request Method）

POST

#### 表頭（Header）

需在請求的表頭（Header）中加入以下兩個欄位

* deviceKey: $deviceKey
	
	請將$deviceKey置換成您在 MCS Lite 平台上所建立的測試裝置的 device key

* Content-Type: text/csv

#### 請求內文（Request Body）

目前只支援 CSV 的資料格式，如

    `$dataChannelID,$timestamp,$value/n`

請注意：若您不需要上傳裝置的時間點,則您可保持 $timestamp 為空 \(但保留逗號\)，此時時間點則會是 MCS Lite 收到資料點的時間。

範例：

```
1,1432538716989,26
2,,26.34
```

第一行：資料通道 ID 為 1，並且給予時間點，26 為上傳的值 \(此時的資料通道類型為整數\)。

第二行：資料通道 ID 為 2，並且不給予時間點，26.34 為上傳的值 \(此時的資料通道類型為浮點數\)。

如欲參考更多詳細的資料通道類型之格式，請參考 MCS 網站上的[資料通道 CSV 格式](https://mcs.mediatek.com/resources/zh-TW/latest/api_references/#資料通道格式)。

#### 回覆（Response）

##### 回覆代碼（Response Code）

200

##### 回覆內文（Response Body）

```json
{
    "results": "success"
}
```
