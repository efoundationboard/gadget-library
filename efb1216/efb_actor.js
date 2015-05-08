
var PortA;
var Port1;

var Motor = function(port) {
	this.on = function(power) {
	};
	this.off = function() {

	};
};

var Touch = function(port) {
	this.readStatus = function() {
		return false;
	}
};

var delay = function(milliseconds) {
	console.log("delay for " + milliseconds + " ms");
};

var Wire = function() {
};



var EFBActor = {
	//Defines
	"PortA": PortA, 
	"Port1": Port1, 

	//Sensors
	"Motor": Motor,
	"Touch": Touch,
	"Wire"	: Wire,

	//function
	"delay": delay,
};

module.exports = EFBActor;