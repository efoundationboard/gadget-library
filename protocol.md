#EFB Gadget Communication Protocol

##General

EFB Gadget Communication Protocol is an asynchronized communication protocol.

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





