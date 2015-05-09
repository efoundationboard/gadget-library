var EA = require("../efb_action");
var ER = require("../efb_runtime");
var ET = require("../efb_types");
var EV = require("../efb_var");
var EW = require("../efb_wire");


var touch1 = new EA.Touch(ET.Port1);

var v01 = new EV();
var loopCount01 = new EV();
var wire01 = new EW();
var wire02 = new EW();


function main1() {
	EA.wait(0.5);
	touch1.readValue(v01);
	wire01.set(v01.get());
}

function main2() {
	wire02.set(wire01.get());
	for (loopCount01.set(1); EA.loopForever(); loopCount01.inc()) {
		console.log(wire02.get());
	}
}

ER.go([main1, main2]);
