var Wire = function() {
	var val = undefined;
	
	this.set = function(v) {
		val = v;
	}

	this.get = function() {
		return val;
	}
};


module.exports = Wire;