## Admin console instructions
When you start the MCS Lite application, your will also see the admin console page.The main purpose is to facilitate the maintenance on MCS Lite system settings, eliminating the need to manually modify configuration. When using MCS Lite for the first time, you must register an admin account and then log in to the console via this account to start the service or modify the settings.

If you cannot see the registration page on MCS Lite App, please go to **http://localhost:3002/admin/signup** directly in the browser.

The admin console provides the following functions:

1. Start/Stop service：Start and stop the MCS Lite IoT platform. When the service is stopped, the device on the network cannot connect to MCS Lite.
2. IP address list：The IP address of the computer on which MCS Lite is running and the port to which the MCS Lite service is bound. Users and devices on the same network can connect to IP: port to use the MCS Lite service. When the computer running MCS Lite has more than one network interface cards or connected to more than one network, you will see these network addresses (IP) being listed.
3. System configuration：Modify the setting of database, OAuth, web APIs, etc. The following is a detailed description of the system configuration, in the regular environment, you should just adopt the default setting.

| File name | Description| 
| :--- | :--- |
| db.json | This is NeDB related settings. In the general situation, just keep the default setting. |
| oauth.json | This is OAuth related settings. It uses port 3000 by default. |
| rest.json | This is RESTful server related settings. It uses port 3000 by default. |
| stream.json | This is streaming server related settings. |
| wot.json | This is WebSocket server related settings. It uses port 8000 by default. |
	

After updating the above files, be sure to restart the MCS Lite service to load the latest settings.

## Configure Database
### Connect MySQL 

You can connect to MySQL as the database of MCS Lite after version ?. What you need to do is to modify the database connection setting on Admin console > Configuration > db.json page.

MCS Lite uses NeDB by default, which is a lightweight JavaScript database. You don't have to install any packages and the data is stored in a plain text file. Here is the pre-configured connection configuration. 

```
// configs/db.json
{
  "db": "nedb",
  "host": "localhost",
  "port": ""
}
```

If you want to connect to MySQL instead of using NeDB as your data storage, please prepare your environment as the instructions below:

1. A MySQL server that MCS Lite can connect to. Update the address or hostname and the port information of MySQL server into the **host** and **port** fields.
2. Create an exclusive database for MCS Lite. Update the name of database into **database** fields.
3. Create an account and password and grand proper permission to allow MCS Lite to read and write the data in this database. Update the account and password into **username** and **password** fields.
4. Update the **db** and **dialect** fields to mysql. Please refer to the example below:

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

5. Then, at the same directory of mcs-lite-app, execute the command as below to migrate the table and schema from NeDB to MySQL.
	
	```s
	$ node migration.js
	``` 


### Database description

In addition to the system settings, data maintenance is also one of the administrative topic. Because MCS Lite uses NeDB, which is a lightweight JavaScript database, all the data is stored in JSON format stored under mcs-lite-app diretory.

| File name | Description |
| :--- | :--- |
|datachannels.json|Store the created data channel. After the data channel is deleted, the record is still there, but isActive field becomes false.|
|datapoints.json|Store the uploaded data points.|
|devices.json|Store the created test device. After the test device is deleted, the record is still there, but isActive field becomes false.|
|prototypes.json|Store the created prototype. After the prototype is deleted, the record is still there, but isActive field becomes false.|
|unittypes.json|The "unit" used by numeric data channel. There are 53 most commonly used units by default, and you can create new units while creating a data channel.|
|users.json|Save all user information on the system.|

After updating the above database files, be sure to restart the MCS Lite service to load the latest data.

If you have changed the database to MySQL and completed the `node migration.js` action, you can also see these tables and the corresponding fields in the MCS Lite database.

### Data backup

If you are using the original NeDB, you just need to backup the files under **mcs-lite-app/db** folder because all the current prototypes, test devices, data channels, data ponits and user accounts information are stored there.


