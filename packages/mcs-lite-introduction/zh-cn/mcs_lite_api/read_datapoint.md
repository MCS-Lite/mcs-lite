## 读取资料

### WebSocket

* #### JSON 格式

##### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/viewer
```

欲接收以 JSON 格式回传的资料时，请求 API 为 **.../viewer**，范例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/viewer
```

##### 回覆内文（Response Body）

透过 WebSocket 所接收到的 JSON 数据格式与上传资料完全一致。

* 针对只会产生一笔资料的通道，像是开关、整数、浮点数、十六进位值、字串、GPIO等，其回传的数据格式为

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

* 针对会同时产生多笔资料的通道，其回传的数据格式为

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

##### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/csv
```

欲接收以 CSV 格式回传的资料时，请求 API 为 **.../csv**，范例

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/csv
```

##### 回覆内文（Response Body）

透过 WebSocket 所接收到的 CSV 数据格式乃是经过转换后方便装置读取的格式。

* 针对只会产生一笔资料的通道，像是开关、整数、浮点数、十六进位值、字串、GPIO等，其回传的数据格式为

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value
```

例如

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

* 针对会同时产生多笔资料的通道，其回传的数据格式为

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value1,$value2
```

例如

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493112039310,control_pwm,255,33
```

其中 255 为指定给 PWM 通道的类比输出值（范围是 0~255），33 为时间区间 (period)。

使用 WebSocket API 接收资料时，并不需要指定资料通道，该测试装置底下全部资料通道的数据若有更新时，皆会及时的推送。 由于 WebSocket 属于永久性的连线，即时收到更新数据且无法查询历史纪录，因此较适合用于开发需要即时接收数据或指令的装置。

### HTTP

* #### JSON 格式

##### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints?limit=1
```

##### 请求方法（Request Method）

GET

##### 参数 (parameter)

需在请求的 URI 中加入 limit=1 参数，表示只获取最新一笔的资料。若要获取多笔历史纪录，可透过 limit 指定数量。

##### 表头 (Header)

* deviceKey: $deviceKey
	
	请将 $deviceKey 置换成您在 MCS Lite 平台上所建立的测试装置的 device key

##### 回覆内文（Response Body）

内文为标准的 **JSON** 格式。

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

##### 请求网址（Request URL）

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints.csv
```

##### 请求方法（Request Method）

GET

##### 参数 (parameter)

若要获取多笔历史纪录，可透过 limit 指定数量。

##### 表头 (Header)

* deviceKey: $deviceKey
	
	请将 $deviceKey 置换成您在 MCS Lite 平台上所建立的测试装置的 device key

##### 回覆內文（Response Body）

内文为标准的 **CSV** 格式。

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

使用 HTTP API 接收资料时，需要指定资料通道，MCS Lite 平台会回传最新一笔资料，由于 HTTP 接收的资料并非即时，且可以指定要获取多少历史纪录，因此较适合用于开发需要统计或是比较的分析图表功能，若想在装置上透过 HTTP API 获取即时讯息，则需要实作一个回圈的机制，定期去询问是否有资料更新。