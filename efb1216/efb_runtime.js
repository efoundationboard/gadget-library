var go = function(taskList) {
	console.log(taskList.length + " tasks to go");
	var i;
	for (i=0; i<taskList.length; ++i) {
		taskList[i]();
	}
};

var EFB_RT = {
	"go"	: go, 
};

module.exports = EFB_RT;
