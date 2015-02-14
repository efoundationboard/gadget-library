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
| Character     |   C   | a ascii character |

##Communication Direction
* **M -> S** :  From Master Controller to Slave Gadget.
* **M <- S** :  From Slave Gadget to Master Controller.

##Message Types
###Device Detecting Message
####Field Definition
* **&lt;device_name> ** : the name of gadget
* **&lt;device_version>** : the version of gadget
* **&lt;devcie_description>** : the description of gadget.

**M -> S** : master request to get the gadget info
```
{GD}
```
**M <- S** : gadget response the description of gadget
```
{GD#<device_name>#<device_version>#<device_description>}
```

###Devcie Identify Message
**M -> S** : master request to get gadget ID
```
{GI#}
```

**S <- M** : gadget response ID if ID exists, or ID is set to gadget
```
{GI#<device_id>}
```

**S <- M** : gadget response ID request, if not device_id set
```
{GI#null}
```

**M -> S** : master set gadget ID
{GI#<device_id>}

####example
```
M -> S : {DI}
M <- S : {DI#null}
M -> S : {DI#12AB34CD56EF}
M <- S : {DI#12AB34CD56EF}
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

