## Retrieve data points

### WebSocket

* #### JSON format

##### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/viewer
```

To retrieve data points in JSON format, use API call **.../viewer**.

For example:

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/viewer
```

##### Response Body

The response content is in standard **JSON** format.

* Some data channels have only 1 key-value pair, like boolean switch, integer, float, hex, string and GPIO. The format is

```json
{"datachannelId":"$dataChannelID","values":{"value":$value}}
```

For example:

```json
{"datachannelId":"GPIO","values":{"value":0}}
{"datachannelId":"onoff","values":{"value":1}}
{"datachannelId":"GPIO","values":{"value":1}}
{"datachannelId":"String","values":{"value":"MCS Lite is good!"}}
```

* Some data channels have multipule key-value pairs, like PWM. The format is

```json
{"datachannelId":"$dataChannelID","values":{"value":"$value", "period":"$period"}}
{"datachannelId":"$dataChannelID","values":{"value":"$value"}}
{"datachannelId":"$dataChannelID","values":{"period":"$period"}}
```

For example:

```json
{"datachannelId":"pwm","values":{"value":"31","period":"8"}}
{"datachannelId":"pwm","values":{"period":"8"}}
```

* #### CSV format

##### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteWSPort to the real port that MCS Lite WebSocket server is binding
// please change $deviceID to the real device ID you created on MCS Lite console

ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey/csv
```

To retrieve data points in CSV format, use API call **.../csv**.

For example:

```
ws://192.168.0.100:8000/deviceId/BJlQmdbQ0l/deviceKey/71ad1f7abc449a3168cc712291198f7de1ab5603e148dce1228c30e0bcea509f/csv
```

##### Response Body

MCS Lite also simplifies the data format into CSV which could be more efficient for device to parse. 

* Some data channels have only 1 key-value pair, like boolean switch, integer, float, hex, string and GPIO. The format is

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value
```

For example:

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

* Some data channels have multipule key-value pairs, like PWM. The format is

```
$deviceID,$deviceKey,$timeStamp,$dataChannelID,$value1,$value2
```

For example:

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493112039310,control_pwm,255,33
```

255 is the value of PWM analog output (it is from 0 to 255), 33 is the value of PWM time period.

You don't have to specify the data channel ID while retrieving data points via WebSocket APIs because it always returns data points from all data channels under specified test device. Once the data is upadted, there is a real-time frame with the updated content pushed via WebSocket connection. 

However, it is not allowed to query for historical data via WebSocket APIs, so WebSocket APIs works better for retriving real-time updates.


### HTTP

* #### JSON format

##### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints?limit=1
```

##### Request Method

GET

##### parameter

You can specify the number of retrieved data by using "limit" in query string. "limit=1" means to retrieve only the newest updated data.

##### Header

* deviceKey: $deviceKey
	
	Please replace $deviceKey to the real device key of your test device which you just created on MCS Lite web console.

##### Response Body

The response content is in standard **JSON** format.

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

* #### CSV format

##### Request URL

```
// please change $MCSLiteServerIP to the real IP address or hostname of MCS Lite server
// please change $MCSLiteAPIPort to the real port that MCS Lite API server is binding
// please change $deviceID to the real device ID you created on MCS Lite console
// please change $dataChannelID to the real channel ID you created on MCS Lite console

http://$MCSLiteServerIP:$MCSLiteAPIPort/api/devices/$deviceID/datachannels/$dataChannelID/datapoints.csv?limit=1
```

##### Request Method

GET

##### parameter

You can specify the number of retrieved data by using "limit" in query string. "limit=1" means to retrieve only the newest updated data.

##### Header

* deviceKey: $deviceKey
	
	Please replace $deviceKey to the real device key of your test device which you just created on MCS Lite web console.

##### Response Body

MCS Lite also simplifies the data format into CSV which could be more efficient for device to parse. 

```
S1lK-BNQCx,4b3ab6e572ac5cc9d344c6f95e30b6c8785035bb2c07f150062c7007fe7bb247,1493108019302,control_gpio,1
```

You have to provide the data channel ID while retrieving data points via HTTP APIs and add a parameter, "limit", in the query string to specify how many data you would like to retrieve. 

HTTP APIs return the data points on-demand, not in real-time, so it works better for doing historical statistic. If you would like to leverage HTTP APIs to get the newest data point in time, you might need to call the HTTP APIs periodically in an infinite loop. 
