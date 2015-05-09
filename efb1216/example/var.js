var EA = require("../efb_action.js");
var EW = require("../efb_wire.js");
var EV = require("../efb_var.js");
var ER = require("../efb_runtime.js");

var v01 = new EV();
var motorA = new EA.Motor(ET.PortA);

function main1() {
	EA.wait(0.5);
	v01.set(1);
}

function main2() {
	
	switch (v01.get()) {
		case (0):
		{

		}
	}
}

main1();

ER.go([main1, main2]);
