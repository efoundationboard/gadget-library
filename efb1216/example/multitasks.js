var EA = require("../efb_action.js");
var ER = require("../efb_runtime.js");
var ET = require("../efb_types.js")

var motorA = new EA.Motor(ET.PortA);

function main1(){
	motorA.onForSeconds(100, 4.0);
	EA.wait(1);
}

function main2() {
	
}

ER.go([main1, main2]);
