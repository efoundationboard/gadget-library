var EA = require("../efb_action.js");
var EV = require("../efb_var.js");
var ER = require("../efb_runtime.js");

var loopCount01 = new EV();
var loopCount02 = new EV();

function main1(){
	EA.beginLoop("01");
	for (loopCount01.set(0); EA.loopForever(); loopCount01.inc()) {
		EA.beginLoop("01");
		for (loopCount02.set(0); EA.repeatTimes(5); loopCount02.inc()) {
			EA.wait(0.5);
		}
		console.log(loopCount01.toNumber());
		console.log("out of inner loop 01");
	}
	console.log("out of loop 01");
}

function main2() {
	EA.wait(5);
	EA.breakLoop("01");
}

ER.go([main1, main2]);
