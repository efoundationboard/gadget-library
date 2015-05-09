var EP = require("./efb_port.js");
var EC = require("./efb_color.js");

var PortA = new EP("A");

var Port1 = new EP("1");

var ColorRed = new EC("red");


var EFB_Types = {
	"PortA"	: PortA,
	
	"Port1"	: Port1,

	"ColorRed" : ColorRed,
};

module.exports = EFB_Types;