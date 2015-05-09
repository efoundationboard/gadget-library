var EA = require("../efb_action.js");
var EV = require("../efb_var.js");
var ER = require("../efb_runtime.js");

var loopCount01 = new EV();

function main(){
	for (loopCount01.set(0); EA.loopForever(); loopCount01.inc()) {
		EA.wait(1);
		console.log(loopCount01.toNumber());
	}
}

ER.go([main]);


