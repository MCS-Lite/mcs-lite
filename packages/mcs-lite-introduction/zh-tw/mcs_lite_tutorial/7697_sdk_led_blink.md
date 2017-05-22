# LinkIt SDK 範例
## 遠端控制 LED 明滅

在這個範例當中，我們將介紹如何透過 WebScoket 與 RESTful API 與 MCS Lite 伺服器溝通。利用 MCS Lite 開關型別的資料通道控制 LinkIt 7697 開發板上 USR LED 燈號的明滅，並且回傳 USR LED 當前的狀態到字串型別的資料通道上。

### 前置作業

1. 設定 LinkIt 7697 的 GCC ARM Embedded 開發環境，詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/zh_tw/get-started/gcc-arm-embedded-command-line-tools-free)。
2. 將 LinkIt 7697 連接到您的電腦，詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/zh_tw/get-started/gcc-arm-embedded-command-line-tools-free/connect-to-the-serial-port)。
3. 啟動 MCS Lite Application，建立一個產品原型，定義資料通道並且新增一個測試裝置。本範例會使用到的資料通道為：

	* 開關控制器：資料通道 ID 為 **switch**
	* 字串顯示器：資料通道 ID 為 **string**

	您也可以自行命名所建立的資料通道 ID ，若資料通道 ID 有變動，請記得要更改程式碼中對應的 ID 與變數喔。

### 動手實作

1. 下載 [LED Blink Example](https://github.com/Mediatek-Cloud/mcs-lite-example/tree/master/GCC/LED_controller) 並將 **LED\_controller** 資料夾放置到 **{SDK\_root}/project/linkit7697\_hdk/apps** 目錄之下。
2. 修改 **LED\_controller/src/main.c** 檔案，配置開發版的網路設定相關參數：
	* SSID: 您的 AP SSID
	* PASSWORD: 您的 AP 密碼
		
	```arduino
#define SSID "your_SSID"
#define PASSWORD "your_password"
	```

3. 再修改 **LED_controller/inc/mcs.h** 檔案，配置 MCS Lite 測試裝置相關參數：
	* Device ID: 在 MCS Lite 上所建立的測試裝置的識別碼
	* Device Key: 在 MCS Lite 上所建立的測試裝置的金鑰
	
	```arduino
	#define DEVICEID "S1Ma*****"
	#define DEVICEKEY "3a4eee2d697dc032334fcd9c1e1597*****...."
	```

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
	
4. 建置完成後產生的二進位檔案會置放在 **{SDK\_root}/out/linkit7697\_hdk/LED_controller** 資料夾中。此時，您就可以使用 SDK 中的 **Flash Tool** 將編譯好的二進位檔案下載至開發板。詳細步驟請參考 [Labs 官方文件](https://docs.labs.mediatek.com/resource/mt7687-mt7697/zh_tw/get-started/gcc-arm-embedded-command-line-tools-free/download-a-pre-built-binary-example)。

5. 下載完成後，將畫面切換到您的瀏覽器並開啟 MCS Lite 的測試裝置詳情頁面。在 MCS Lite 頁面上操作開關類型的控制器，當開關切換至**開啟**狀態時， LinkIt 7697 開發板上的 **USR LED** 燈號會亮起，並且上傳 **LED is ON** 字串到字串類型的顯示器；反之，LED 燈號將熄滅，並且上傳 **LED is OFF** 的字串。

	**MCS Lite 測試裝置操作頁面** ![Arduino IDE](../assets/MCS_device.png)
	
	**LinkIt 7697 USR LED 燈號** ![Arduino IDE](../assets/7697_LED.png)
	
	
### 代碼解說
在這個範例的 **main.c** 程序中，我們會在裝置的 Wi-Fi 網路連線成功後建立與 MCS Lite 伺服器的 WebSocket 連線，用來接收來自伺服器端所發送的指令，再交由 **tcp\_callback()** 這個函式做處理。WebSocket 的連線是永久性的，一但建立之後，會定期發送 heartbeat 通知伺服器此裝置依然存活，保持連線。


在 **tcp\_callback()** 函式中，我們使用了 cJSON 函式庫來處理來自 MCS Lite 的 JSON 格式的指令/資料，判別開與關的指令。

同時，您可能也會發現到，在接收處理 WebSocket 的資料時，我們同時也呼叫了 **mcs\_upload\_datapoint()** 函式，透過 RESTful API 上傳一個字串到 MCS Lite 伺服器。其中 **string** 為我們先前所定義的資料通道 ID。
