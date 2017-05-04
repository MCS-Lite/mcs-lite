## 如何連線 MCS Lite WoT service

MCS Lite 的 WoT service 是沿用一個 WoT framework \( Devify server \) 改過來。

在 WoT 架構下，連線跟發送訊息分別為兩個不同的 channel

* 透過 `ws://$mcs-lite-ip:8000/deviceId/$deviceId/deviceKey/$deviceKey` 這個 channel 來發送訊息

* 透過 `ws://$mcs-lite-ip:8000/deviceId/$deviceId/deviceKey/$deviceKey/viewer` 這個 channel 來接收訊息

以上的教學範例：

### Javascript Example:

websocket-send:

[https://github.com/iamblue/mcs-lite-app/blob/master/wotserver/tests/websocket-send.js](https://github.com/iamblue/mcs-lite-app/blob/master/wotserver/tests/websocket-send.js)

websocket-viewer \(for Client side\):

[https://github.com/iamblue/mcs-lite-app/blob/master/wotserver/tests/websocket-viewer.js](/h ttps://github.com/iamblue/mcs-lite-app/blob/master/wotserver/tests/websocket-viewer.js)

### LinkIt RTOS mcs-lite Example \(For client side\)

* Url：[https://github.com/Mediatek-Cloud/mcs-lite-example/tree/master/GCC/LED\_controller/src](https://github.com/Mediatek-Cloud/mcs-lite-example/tree/master/GCC/LED_controller/src)

附註說明：

關於 RTOS 怎麼透過 lwip 連線 websocket，詳情操作請參考[這裡](https://github.com/Mediatek-Cloud/mcs-lite-example/blob/master/GCC/LED_controller/src/mcs_tcp.c#L64)

關於 parse JSON , 在 RTOS SDK 可以使用 cjson 作為 parser，詳情操作請參考[這裏](https://github.com/Mediatek-Cloud/mcs-lite-example/blob/master/GCC/LED_controller/src/main.c#L143)

