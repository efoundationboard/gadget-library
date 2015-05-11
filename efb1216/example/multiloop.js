var EA = require("../efb_action.js");
var EV = require("../efb_var.js");
var ER = require("../efb_runtime.js");

var loopCount01 = new EV();
var loopCount02 = new EV();

function main1(){
	EA.beginLoop("01");
	for (loopCount01.set(0); EA.loopForever(); loopCount01.inc()) {
		EA.wait(1);
		console.log(loopCount01.toNumber());
	}
}

function main2() {
	EA.beginLoop("01");
	for (loopCount02.set(0); EA.loopForever(); loopCount02.inc()) {
		EA.wait(2);
		//console.log(loopCount02.toNumber());
		console.log("======================================================================");
	}
}

ER.go([main1, main2]);


