## Upload data points

### WebSocket

#### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey
```

For example:

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f
```

#### Request Body

The request content is in standard **JSON** format.

* Some data channels have only 1 key-value pair, like boolean switch, integer, float, hex, string and GPIO. The format is

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload

{"datachannelId":"$dataChannelID","values":{"value":$value}}
```

For example:

```json
{"datachannelId":"control_integer","values":{"value":91}}
```

* Some data channels have multipule key-value pairs, like PWM. The format is

```json
// please change $dataChannelID to the real channel ID you created on MCS Lite console
// please change $value to the real value you are going to upload
// please change $period to the real period you are going to upload


{"datachannelId":"$dataChannelID","values":{"value":"$value", "period":"$period"}}
{"datachannelId":"$dataChannelID","values":{"value":"$value"}}
{"datachannelId":"$dataChannelID","values":{"period":"$period"}}
```

For example:

```json
{"datachannelId":"control_pwm","values":{"value":"205","period":"10"}}
```

### HTTP

#### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datapoint.csv
```

For example:

```
http://192.168.0.100:3000/api/devices/BJlQmdbQ0l/datapoints.csv
```

#### Request Method

POST

#### Header

* deviceKey: $deviceKey
	
	Please replace $deviceKey to the real device key of your test device which you just created on MCS Lite web console.

* Content-Type: text/csv

#### Request Body

Only **CSV format** is allowed for uploading data points via HTTP. The format is

    `$dataChannelID,$timestamp,$value/n`

Please be noted：You can provide null value as $timestamp (please keep the comma). MCS Lite server will add timestamp automatically right after it receives the data.

For example:

```
1,1432538716989,26
2,,26.34
```

Line 1: Data channel ID is 1, the value of this data channel is 26 (integer) and the timestamp is provided.  


Line 2: Data channel ID is, the value of this data channel is 26.34 (float) and the timestamp is not provided.  

For more detailed information on the data channel format，please refer to the MCS website for [Data channel format in CSV](https://mcs.mediatek.com/resources/latest/api_references/#data-channel-format)。

#### Response

##### Response Code

200

##### Response Body

```json
{
    "results": "success"
}
```
