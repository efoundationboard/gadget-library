EFB Gadget Communication Protocol
===

EFB Hardware Parts
---

* M : Master Controller
* S : Slave Modules (Gadget)

Data Types
---

|      Name     | Short | Description |
|---------------|:-----:|-------------|
| Analog Value  |   A   | a number value for analog communication, data length decided by gadget. |
| Binary Value  |   B   | a binary value for digial communication, 0/1 |
| Character     |   C   | a ascii character |

Communication Direction
---
* M -> S :  From Master Controller to Slave Gadget.
* M <- S :  From Slave Gadget to Master Controller.

Message Types
---
1. Device Detecting Message
1. "{DD}" // M -> S : master request to get the gadget info
    "{DD#<device_name>#<device_version>#<device_description>}" //M <- S : gadget response



