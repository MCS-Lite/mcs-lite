## 讀取資料

### WebSocket

* #### JSON 格式

##### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/viewer
```

欲接收以 JSON 格式回傳的資料時，請求 API 為 **.../viewer**，範例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/viewer
```

##### 回覆內文（Response Body）

透過 WebSocket 所接收到的 JSON 數據格式與上傳資料完全一致。

* 針對只會產生一筆資料的通道，像是開關、整數、浮點數、十六進位值、字串、GPIO等，其回傳的數據格式為

```json
{"datachannelId":"$dataChannelID","values":{"value":$value}}
```

例如

```json
{"datachannelId":"GPIO","values":{"value":0}}
{"datachannelId":"onoff","values":{"value":1}}
{"datachannelId":"GPIO","values":{"value":1}}
{"datachannelId":"String","values":{"value":"MCS Lite is good!"}}
```

* 針對會同時產生多筆資料的通道，其回傳的數據格式為

```json
{"datachannelId":"$dataChannelID","values":{"value":"$value", "period":"$period"}}
{"datachannelId":"$dataChannelID","values":{"value":"$value"}}
{"datachannelId":"$dataChannelID","values":{"period":"$period"}}
```

例如

```json
{"datachannelId":"pwm","values":{"value":"31","period":"8"}}
{"datachannelId":"pwm","values":{"period":"8"}}
```

* #### CSV 格式

##### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/csv
```

欲接收以 CSV 格式回傳的資料時，請求 API 為 **.../csv**，範例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/csv
```

##### 回覆內文（Response Body）

透過 WebSocket 所接收到的 CSV 數據格式乃是經過轉換後方便裝置讀取的格式。

* 針對只會產生一筆資料的通道，像是開關、整數、浮點數、十六進位值、字串、GPIO等，其回傳的數據格式為

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value
```

例如

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

* 針對會同時產生多筆資料的通道，其回傳的數據格式為

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value1,$value2
```

例如

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493112039310,control_pwm,255,33
```

其中 255 為指定給 PWM 通道的類比輸出值（範圍是 0~255），33 為時間區間 (period)。

使用 WebSocket API 接收資料時，並不需要指定資料通道，該測試裝置底下全部資料通道的數據若有更新時，皆會及時的推送。 由於 WebSocket 屬於永久性的連線，即時收到更新數據且無法查詢歷史紀錄，因此較適合用於開發需要即時接收數據或指令的裝置。

### HTTP

* #### JSON格式

##### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints?limit=1
```

##### 請求方法（Request Method）

GET

##### 參數 (parameter)

需在請求的 URI 中加入 limit=1 參數，表示只獲取最新一筆的資料。若要獲取多筆歷史紀錄，可透過 limit 指定數量。

##### 表頭 (Header)

* deviceKey: $deviceKey
	
	請將 $deviceKey 置換成您在 MCS Lite 平台上所建立的測試裝置的 device key

##### 回覆內文（Response Body）

內文為標準的 **JSON** 格式。

```json
{
    "data":[
        {
            "deviceId":"your device ID",
            "datachannelId":"your channel ID",
            "values":{
                "value":0
            },
            "createdAt":1492497174410,
            "updatedAt":1492497174410,
            "isActive":true,
            "_id":"EdG6Jnrq4O1Sd4l9"
        }
    ]
}
```

* #### CSV 格式

##### 請求網址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints.csv
```

##### 請求方法（Request Method）

GET

##### 參數 (parameter)

若要獲取多筆歷史紀錄，可透過 limit 指定數量。

##### 表頭 (Header)

* deviceKey: $deviceKey
	
	請將 $deviceKey 置換成您在 MCS Lite 平台上所建立的測試裝置的 device key

##### 回覆內文（Response Body）

內文為標準的 **CSV** 格式。

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

使用 HTTP API 接收資料時，需要指定資料通道，MCS Lite 平台會回傳最新一筆資料，由於 HTTP 接收的資料並非即時，且可以指定要獲取多少歷史紀錄，因此較適合用於開發需要統計或是比較的分析圖表功能，若想在裝置上透過 HTTP API 獲取即時訊息，則需要實作一個迴圈的機制，定期去詢問是否有資料更新。