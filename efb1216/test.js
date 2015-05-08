var EA = require("./efb_actor")

var motorA = new EA.Motor(EA.PortA);
var wire01 = new EA.Wire();
var touch1 = new EA.Touch(EA.Port1);
var delay = EA.delay;





function main1() {
	motorA.on(100);
	delay(1000);
	motorA.off();
	delay(1000);
}



function main2() {
	for (var loopCount01 = 0; true; loopCount01++){
		wire01 = touch1.readStatus();
		delay(1000);
		motorB.on(wire01);
	}
}

main1();