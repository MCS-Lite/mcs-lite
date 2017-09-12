## 系统管理主控台使用说明
系统管理主控台是一个网页介面，当您启动 MCS Lite 应用程式同时会看到管理主控台介面，其主要目的是为了方便您自行维护 MCS Lite 的系统设定，省去手动修改设定档的时间。在第一次使用 MCS Lite 时，必须先注册一个管理者帐号，之后皆必须透过此管理者帐号登入主控台，启动服务或修改相关设定。

若您没有看到注册画面，请直接在浏览器输入 **http://localhost:3002/admin/signup**，完成注册。

系统管理主控台提供有下面几个功能：

1. 开关服务：启动与停止 MCS Lite 物联网平台，当服务停止时，网路上的装置则无法连线到 MCS Lite。
2. 连线介面列表：也就是 MCS Lite 所运行的电脑的网路位址 (IP) 以及 MCS Lite 服务所绑定的连接埠 (port)，在同个网路内的使用者与装置则可连线到 IP:port 来使用 MCS Lite 服务。当 MCS Lite 所运行的电脑有不只一张网路卡或是连接上不只一个网路时，您将会看到这些网路位址 (IP) 一一的被列出。
3. 系统管理：修改资料库 (database)，使用者身份验证 (OAuth)，网路应用接口 (web APIs) 的服务设定，以下为系统设定档的详细说明，在一般的环境下，建议使用预设值，无须特意更改。

| 档案名称 | 说明 |
| :--- | :--- |
| db.json | 此为 nedb 连线相关设定，一般情况皆维持预设即可。 |
| oauth.json | 此为 OAuth service 相关设定。在尚无 auto scaling 与 distributed deployment 的需求之前，OAuth service 的 host 与 port（预设 port 为 3000）设定，与 RESTful service 相同即可。另外注意，如果为 production 环境，建议 JWT\_SECRET 不要使用预设的 "superSecret"。 |
| rest.json | 此为 RESTful service 相关设定。设定 MCS Lite API 所要连线的 host 与 port（预设 port 为 3000），如果有更改请务必通知使用者。另外注意，如果为 production 环境, secretKey, prototypeKey, deviceKey, session 请务必改成另外的内容。 |
| stream.json | 此为 streaming service 的参数设定。 |
| wot.json | 此为 WebSocket 的所要连线的 host 与 port（预设 port 为 8000） |

更新上述的檔案之後，請務必重新啟動 MCS Lite 服務以載入最新的設定。

## 设定资料库
### 使用 MySQL 资料库

在？版本后，MCS Lite 增加了对 MySQL 资料库的支援，您只需要在管理主控台 > 系统管理 > db.json 中修改资料库的连线设定即可。

MCS Lite 预设采用的 NeDB 是一个轻量的 JavaScript 资料库，您不需额外的安装任何套件，NeDB 会将资料已档案的方式储存。以下为资料库连线的预设值。

```
// configs/db.json
{
  "db": "nedb",
  "host": "localhost",
  "port": ""
}
```

若想将 MCS Lite 相关资料储存至 MySQL 中，请确认您的环境与并修改设定档如下：

1. 一个 MCS Lite 可以连线的 MySQL server。并将 MySQL server 的位址或主机名称与连接埠填入设定档中的 **host** 与 **port** 栏位。
2. 建立 MCS Lite 专属资料库。并将资料库的名称填入设定档中的 **database** 栏位。
3. 一组 MySQL 的帐号密码使 MCS Lite 有权限可以读写资料库。并将帐号密码填入设定档中的 **username** 与 **password** 栏位。
4. 修改并指定 **db** 与 **dialect** 栏位成 mysql。详情可参考下面范例：

	```
	// configs/db.json
	{
	  "db": "mysql",
	  "host": "127.0.0.1",
	  "port": 3306,
	  "username": "root",
	  "password": "root",
	  "database": "mcslite",
	  "dialect": "mysql",
	  "logging": true
	}
	```

5. 接着在 mcs-lite-app 的同一层目录下，执行下面指令，设定资料库中的各个表格与栏位。
	
	```
	$ node migration.js
	``` 

###资料库栏位说明

除了系统设定，资料的维护也是管理者关注的功能之一，在预设使用的 NeDB 中，所有的资料是以 JSON 档案的格式储存，位于 **mcs-lite-app/db** 资料夹下。

| 档案名称 | 说明 |
| :--- | :--- |
|datachannels.json|储存所建立的资料通道。当通道被删除时，资料依然保存，但 isActive 变成 false|
|datapoints.json|储存所上传的资料点。|
|devices.json|储存所建立的测试装置。当装置被删除时，资料依然保存，但 isActive 变成 false|
|prototypes.json|儲存所建立的產品原型。當原型被刪除時，資料依然保存，但 isActive 變成 false|
|unittypes.json|数值型态的资料通道所要使用的“单位”。系统预设已有 53 个最常用的单位，您也可以在创建资料通道时，自行建立新的度量单位。|
|users.json|储存系统上所有的使用者资讯。|

更新上述的资料库档案之后，请务必重新启动 MCS Lite 服务以载入最新的资料。

若您已将资料库改为 MySQL 并且完成 `node migration.js` 动作，您也可以在 MCS Lite 资料库中看到这些表格以及相对应的栏位。

### 资料备份

若您使用的是预设的 NeDB，像是产品原型 (Prototype)，测试装置 (Test Device)，资料通道 (Data Channel)，上传资料 (Data Channel) 与使用者帐户 (User Account) 等资料，都是以 JSON 格式储存在 **mcs-lite-app/db** 资料夹下，备份资料即是把这个资料夹的档案备份好即可。
