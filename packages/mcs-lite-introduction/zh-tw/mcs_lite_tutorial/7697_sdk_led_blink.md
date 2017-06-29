# LinkIt SDK 範例
## 遠端控制 LED 明滅

我們將使用 LinkIt 7697 SDK GCC 的開發環境來實作與 MCS Lite 伺服器溝通。利用 MCS Lite 開關型別的資料通道控制 LinkIt 7697 開發板上 USR LED 燈號的明滅，並且回傳 USR LED 當前的狀態到另一個資料通道上。

### 前置作業

1. 設定 LinkIt 7697 的 GCC ARM Embedded 開發環境，詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/en/get-started-linkit-7697-hdk/gcc-arm-embedded-linkit-7697)。
2. 將 LinkIt 7697 連接到您的電腦，詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/en/get-started-linkit-7697-hdk/gcc-arm-embedded-linkit-7697/connect-linkit-7697-to-computer)。
3. 啟動 MCS Lite Application，開啟瀏覽器前往 MCS Lite 頁面，建立一個產品原型，定義資料通道並且新增一個測試裝置。本範例會使用到的資料通道為：

	* 開關控制器：資料通道 ID 為 **switch_controller**
	* 開關顯示器：資料通道 ID 為 **switch_display**

	在 MCS Lite 網頁上，您可手動建立或是直接**匯入產品原型**。[下載原型範本](https://github.com/MCS-Lite/mcs-lite-example/blob/master/LinkIt_7697/GCC/mcs-lite-prototype-led-example.json)
	
	若您更改了資料通道 ID，請記得要更改程式碼中對應的 ID 與變數喔。


### 動手實作

1. 下載 [LED Blink Example](https://github.com/MCS-Lite/mcs-lite-example/tree/master/LinkIt_7697/GCC/LED_controller) 並將 **LED\_controller** 資料夾放置到 **{SDK\_root}/project/linkit7697\_hdk/apps** 目錄之下。
2. 修改 **LED\_controller/src/main.c** 檔案，配置開發版的網路設定相關參數以及 MCS Lite 的連線資訊，例如
		
	```arduino
	// Input your Wi-Fi setting here 
	#define SSID "mcs"
	#define PASSWORD "mcs1234"
	
	//Input MCS Lite websocket server here
	#define WEBSOCKET_SERVER "192.168.1.241"
	#define WEBSOCKET_PORT 8000
	
	//Input MCS Lite RESTful server here
	#define API_SERVER "192.168.1.241"
	#define API_PORT 3000
	
	// Input MCS Lite device ID and Key here
	#define DEVICE_ID "Bk1chnjbW"
	#define DEVICE_KEY "0676619c94374d542fc8421d0ed73ad3e189c03459453c214a8276cb26c341db"
	```

	* **SSID**: 您 Wi-Fi AP 的 SSID
	* **PASSWORD**: 您 Wi-Fi AP 的密碼
	* **WEBSOCKET_SERVER**: MCS Lite 所運行的 WebSocket 伺服器的網路位址，可以是 IP 或是主機名稱
	* **WEBSOCKET_PORT**: MCS Lite 服務中，WebSocket 所使用的連接埠，預設是 8000
	* **API_SERVER**: MCS Lite 所運行的 RESTful API 伺服器的網路位址，可以是 IP 或是主機名稱
	* **API_PORT**: MCS Lite 服務中，RESTful API 所使用的連接埠，預設是 3000
	* **DEVICE_ID**: 在 MCS Lite 上建立的測試裝置的 ID
	* **DEVICE_KEY**: 在 MCS Lite 上建立的測試裝置的 Key

3. 接著，就可以開始透過 GCC 編譯並建立您的專案了。現在確認已經儲存修改過的程式碼，然後切換到 **GCC** 子資料夾，並執行 **make** 命令。
	
	```bash
	cd {SDK_Root}/project/linkit7697_hdk/apps/my_project/GCC
	make
	```
	或是切換到 **{SDK\_Root}** 資料夾，並執行 **.\\build.sh** 腳本。
	
	```bash
	cd {SDK_Root}
	./build.sh linkit7697_hdk LED_controller
	```
	
4. 建置完成後產生的二進位檔案會置放在 **{SDK\_root}/project/linkit7697\_hdk/apps/LED_controller/GCC/Build** 資料夾中。此時，您就可以使用 SDK 中的 **Flash Tool** 將編譯好的二進位檔案下載至開發板。詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/en/get-started-linkit-7697-hdk/gcc-arm-embedded-linkit-7697/download-project-binary-with-flash-tool-linkit-7697)。

5. 下載完成後，將畫面切換到您的瀏覽器並開啟 MCS Lite 的測試裝置詳情頁面。在 MCS Lite 頁面上操作開關類型的控制器，當開關切換至**開啟**狀態時， LinkIt 7697 開發板上的 **USR LED** 燈號會亮起，並且上傳 **LED is ON** 字串到字串類型的顯示器；反之，LED 燈號將熄滅，並且上傳 **LED is OFF** 的字串。

	**MCS Lite 測試裝置操作頁面** ![Arduino IDE](../../assets/MCS_device_string.png)
	
	**LinkIt 7697 USR LED 燈號** ![Arduino IDE](../../assets/7697_LED.png)
	
	
### 代碼解說
在這個範例的 **main.c** 程序中，我們會在裝置的 Wi-Fi 網路連線成功後建立與 MCS Lite 伺服器的 WebSocket 連線，用來接收來自伺服器端所發送的指令，再交由 **tcp\_callback()** 這個函式做處理。WebSocket 的連線是永久性的，一但建立之後，會定期發送 heartbeat 通知伺服器此裝置依然存活，保持連線。


在 **tcp\_callback()** 函式中，我們使用了 cJSON 函式庫來處理來自 MCS Lite 的 JSON 格式的指令/資料，判別開與關的指令。

同時，在接收處理 WebSocket 的資料時，我們同時也呼叫了 **mcs\_upload\_datapoint()** 函式，透過 RESTful API 上傳一個字串到 MCS Lite 伺服器。其中 **string_display** 為我們先前所定義的資料通道 ID。
