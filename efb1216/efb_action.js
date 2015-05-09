var EP = require('./efb_port');

var Motor = function(port) {
	console.log("create a motor on " + port.name);
	this.onForSeconds = function(power, seconds) {
		console.log("power on motor on " + port.name + " for " + seconds + " second(s)");
	};
};

var Touch = function(port) {
	console.log("create a touch on " + port.name);
	this.readValue = function (v) {
		v.set(1);
	}
}

var Led = function(port) {
	console.log("create a led on " + port.name);
	this.showColor = function (color) {
		console.log("change led on " + port.name + " to color " + color.name);
	};
};


var wait = function(seconds) {
	console.log("wait for " + seconds + " second(s)");
}

var beginLoop = function(loopName) {
	console.log("enter loop : " + loopName);
}

var loopForever = function() {
	console.log("loop forever");
	return true;
}

var repeatTimes = function(count) {
	console.log("loop repeat " + count + " times");
	return true;
}

var EFB_Actors = {
	
	"Motor"	: Motor, 
	"Touch"	: Touch,
	"Led"	: Led,

	"wait"	: wait,
	"loopForever":loopForever,
	"beginLoop"	: beginLoop,
	"repeatTimes" : repeatTimes,

};


module.exports = EFB_Actors;