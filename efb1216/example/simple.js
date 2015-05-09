var EA = require("../efb_action.js");
var ET = require("../efb_types.js");
var ER = require("../efb_runtime.js");

var motorA = new EA.Motor(ET.PortA);

function main(){
	motorA.onForSeconds(100, 4.0);
	EA.wait(1);
}

ER.go([main]);
