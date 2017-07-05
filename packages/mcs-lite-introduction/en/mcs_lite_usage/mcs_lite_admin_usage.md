## Admin console instructions
When you start the MCS Lite application, your will also see the admin console page.The main purpose is to facilitate the maintenance on MCS Lite system settings, eliminating the need to manually modify configuration. When using MCS Lite for the first time, you must register an admin account and then log in to the console via this account to start the service or modify the settings.

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

## More management needs
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

### Data backup

You just need to backup the files under **mcs-lite-app/db** folder because all the current prototypes, test devices, data channels, data ponits and user accounts information are stored there.


