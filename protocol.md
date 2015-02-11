EFB Gadget Communication Protocol
===

EFB Hardware Parts
---

* M - Master Controller
* S - Slave Modules (Gadget)

Data Types
---

|  Name | Short | Description |
|-------|:-----:|-------------|
| Integer   | I | A 16 bit integer, [-32768, 32767]    |
| Number    | N | A Number like -3, 6, 2.3, etc. |
| 8-bit integer | 8 | A unsigned 8 bit integer, [0, 255] |
| Boolean   | B | True or False, 1 or 0, T or F |
| Character | C | A 8 bit ascii character    |
| String    | S | Character String, Variable length, Maximum length 256, add escape character '\' before '\', '#' and '}' |
| Blob      | L | Binary Data, Variable length, Maximum length 256, add escape character '\' before '\', '#' and '}' |

Message Types
---

