## 上传资料

### WebSocket

#### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey
```

范例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f
```

#### 请求内文（Request Body）

* 内文为标准的 **JSON** 格式。
* 针对只会产生一笔资料的通道，像是开关、整数、浮点数、十六进位值、字串、GPIO 等，其上传的格式为

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload

{"datachannelId":"$dataChannelID","values":{"value":$value}}
```

范例

```json
{"datachannelId":"control_integer","values":{"value":91}}
```

* 针对会同时产生多笔资料的通道，像是 PWM，其上传格式如下。当然，您也可以只上传其中一个数据。

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload
// please change $period to the real period you are going to upload


{"datachannelId":"$dataChannelID","values":{"value":"$value", "period":"$period"}}
{"datachannelId":"$dataChannelID","values":{"value":"$value"}}
{"datachannelId":"$dataChannelID","values":{"period":"$period"}}
```

范例

```json
{"datachannelId":"control_pwm","values":{"value":"205","period":"10"}}
```

### HTTP

#### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datapoint.csv
```

范例

```
http://192.168.0.100:3000/api/devices/BJlQmdbQ0l/datapoints.csv
```

#### 请求方法（Request Method）

POST

#### 表头（Header）

需在请求的表头（Header）中加入以下两个栏位

* deviceKey: $deviceKey

	请将 $deviceKey 置换成您在 MCS Lite 平台上所建立的测试装置的 device key

* Content-Type: text/csv

#### 请求内文（Request Body）

目前只支援 CSV 的资料格式，如

    `$dataChannelID,$timestamp,$value/n`

请注意：若您不需要上传装置的时间点,则您可保持 $timestamp 为空 \(但保留逗号\)，此时时间点则会是 MCS Lite 收到资料点的时间。

范例：

```
1,1432538716989,26
2,,26.34
```

第一行：资料通道 ID 为 1，并且给予时间点，26 为上传的值 \(此时的资料通道类型为整数\)。

第二行：资料通道 ID 为 2，并且不给予时间点，26.34 为上传的值 \(此时的资料通道类型为浮点数\)。

如欲参考更多详细的资料通道类型之格式，请参考 MCS 网站上的[资料通道 CSV 格式](https://mcs.mediatek.cn/resources/zh-TW/latest/api_references/#资料通道格式)。

#### 回覆（Response）

##### 回覆代码（Response Code）

200

##### 回覆内文（Response Body）

```json
{
    "results": "success"
}
```
