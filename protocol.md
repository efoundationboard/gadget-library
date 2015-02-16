#EFB Gadget Communication Protocol

##General

EFB Gadget Communication Protocol is an asynchronized communication protocol. A gadget has one or more data types, and one data type can contain serval channels. For example, an arduino has 14 digital channels and 6 analog channels.

##EFB Hardware Parts

* M : Master Controller
* S : Slave Modules (Gadget)

##Data Types

|      Name     | Short | Description |
|---------------|:-----:|-------------|
| Analog Value  |   A   | a number value for analog communication, data length decided by gadget. |
| Binary Value  |   B   | a binary value for digial communication, 0/1 |
| Character     |   C   | a ascii character or a string of utf8 characters |

##Communication Direction
* **M -> S** :  From Master Controller to Slave Gadget.
* **M <- S** :  From Slave Gadget to Master Controller.

##Message Types
###Device Detecting Message
####Field Definition
* **&lt;device_name>** : the name of gadget
* **&lt;device_version>** : the version of gadget
* **&lt;devcie_description>** : the description of gadget.

**M -> S** : master request to get the gadget info
```
{?GD}
```
or the short form
```
{?}
```
**M <- S** : gadget response the description of gadget
```
{=GD#<device_name>#<device_version>#<device_description>}
```
#### example
```
M->S : {?GD}
M<-S : {=GD#Dual Motor Gadget#0.1.0#please write speed (-127 to 127) on Analog Channel 0 and 1}
```
another example
```
M->S : {?}
M<-S : {=GD#Dual Motor Gadget#0.1.0#please write speed (-127 to 127) on Analog Channel 0 and 1}
```

### Devcie Identify Message
**M -> S** : master request to get gadget ID
```
{？GI}
```

**S <- M** : gadget response ID if ID exists, or ID is set to gadget
```
{=GI#<device_id>}
```

**S <- M** : gadget response ID request, if not device_id set
```
{=GI#}
```

**M -> S** : master set gadget ID
{！GI#<device_id>}

####example
```
M -> S : {？GI}
M <- S : {=GI#}
M -> S : {！GI#12AB34CD56EF}
M <- S : {=GI#12AB34CD56EF}
```

###Data Read Message
**M->S** : master send read request to gadget
```
{?<data_type>#<channelID>}
```
**M<-S** : gadget response the data
```
{=<data_type>#<channelID>#<value>}
```
####example
read #1 on analog channel, got the value is 47.
```
M->S : {?A#1}
M<-S : {=A#1#47}
```
read #9 on digial channel(e.g a button or proximity switch), got value 1
```
M->S : {?D#9}
M<-S : {=D#9#1}
```

###Data Write Message
**M->S** : master send data to gadget
```
{!<datatype>#<channelID>#<value>}
```
**M<-S** : gadget response the data for accepting this action. This Message is optional.
```
{=<datatype>#<channelID>#<value>}
```

####example
write 1 to digital channel #13
```
M->S : {!B#13#1}
M<-S : {=B#13#1}
```
write an write angle 90 degree on analog channel #9
```
M->S : {!A#9#90}
M<-S : {=A#9#90}
```
write a string to display on oled screen
```
M->S : {!C#0#Hello World!}
M<-S : {=C#0#Hello World!}
```

###Data Notification Message
When data notification is set to enable on a gadget, the gadget can send a **Data Notification Message** to master.

**M<-S** : gadget send data notification message to master
```
{=<datatype>#<channelID>#<value>}
```
####example
A button is attache to digital channel #9, and was pushed down.
```
M<-S : {=D#9#1}
```

### Error Message
gadget can send error message to master when error occors
#### Field Definition
* **&lt;error_number>** : an error number
⋅⋅⋅* 0 = Unrecognized Request
> * other number can defined by gadget

**M<-S** : Error message
```
{ER#<error_number>}
```


	error_number: an error number

