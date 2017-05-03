# 概述

## 功能介紹

MCS Lite 承襲 MCS 雲端數據平台的核心功能，用以幫助對物聯網開發有興趣的個人與團隊快速建立一個物聯網服務平台，在學習與開發階段時可輕易的實現與穿戴式或物聯網裝置的互動並存取數據。

MCS Lite 應用程序主要包含了以下兩個主要的使用介面：

1. **物聯網服務平台**

   * 透過標準的網路協定（HTTP or websocket）將測試裝置產生的數據上傳至 MCS Lite 並儲存。
   * 透過標準的網路協定（websocket）遠端控制您的測試裝置。

   * 圖形化的數據介面（當前資料與歷史數據）。

   * 管理所有的測試裝置。

   * 提供手機版本的操作介面。

   * 提供 MCS Lite 函式庫，有助於簡化並加速開發流程。

2. **系統管理主控台**

   * 顯示服務器允許連線的 IP 位置。
   * 設定資料庫與各項服務的連線資訊。
   * 管理服務平台的使用者帳號與資料。
   * 啟動或停止 MCS Lite 服務平台。
   * MCS Lite 程式更新。

## 安裝指南

1. 下載 **MCS Lite** 應用程式。
   * Windows x64: [https://labs.mediatek.com/en/download/kSjImF9g](https://labs.mediatek.com/en/download/kSjImF9g)
   * Windows x86: [https://labs.mediatek.com/en/download/Le1PTB49](https://labs.mediatek.com/en/download/Le1PTB49)
   * MacOS: [https://labs.mediatek.com/en/download/JqOI2DDT](https://labs.mediatek.com/en/download/JqOI2DDT) 
2. 將下載後的檔案解壓縮，產生的資料夾可以搬遷或複製到任意的目錄底下。
3. 執行 **mcs-lite-app **檔案，開啟系統管理主控台。

   * 如果您是在 MacOS 上第一次執行 **mcs-lite-app **或是更換過檔案路徑，請務必先執行 **setup **腳本程式，重新初始化 config.json 的所在路徑。
   * 如果您是在 MacOS 上執行 **mcs-lite-app**，可能會看到如下的警告視窗，因為 **mcs-lite-app **來自未識別的開發者，可透過按滑鼠右鍵來開啟。  
     ![](/assets/unknown warning.png)

4. 使用預設的帳號密碼登入主控台，此時物聯網服務平台的應用程序尚未開啟運行。

5. 點擊**啟動**按鈕，開啟物聯網服務平台。

6. 在 **IP 連線**頁面可以看到** MCS Lite** 服務所綁定的 IP 與連接埠列表。

7. 同個網域內的設備與電腦皆可在瀏覽器的網址列中輸入 MCS Lite 服務的 IP 與連接埠，連線到物聯網服務平台。

   * 例如：[http://172.23.6.69:3000](http://172.23.6.69:3000)

## 系統需求

### 作業系統

| **作業系統** | **版本** |
| :--- | :--- |
| Windows | Windows 7 and above |
| MacOS | 10.12 Sierra and above |
| Others | MCS Lite 亦可安裝在其他多種作業環境之下，但部分功能可能受限，且安裝方式各有不同，請參考[附錄A](/mcs_lite_platform.md)。 |

### 硬體

* 400 MHz 以上或更快的 32 位元 \(x86\) 或 64 位元 \(x64\) 處理器

* 建議最少 128 MB RAM

* 500 MB 的可用硬碟空間

* 區域網路存取

* 相關防火牆開啟 3000, 8000, 8888 port （可以在[系統管理主控台](/mcs_lite_usage/mcs_lite_admin_usage.md)使用說明查看如何修改相關設定 ）



