var Variable = function() {
	var val = 0;
	var self = this;
	console.log("create a new variable");
	this.set = function(newVal) {
		val = newVal;
		console.log("set val to " + newVal);
	}
	this.get = function() {
		console.log("get val(" + val + ")");
		return val;
	}
	this.inc = function() {
		if (typeof val === "number") {
			val = val + 1;
		}
		console.log("increase variable to " + val);
		return self
	}
	this.toNumber = function() {
		return Number(val);
	}
};

module.exports = Variable;