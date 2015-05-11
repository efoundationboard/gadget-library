var childProcess = require("child_process");

var launchEfb = function (taskList) {
	console.log(taskList.length + " tasks to go");
	var efbFile = process.argv[1];
	var i;
	for (i=0; i<taskList.length; ++i) {
		//console.log(process.argv);
		//childProcess.fork("dummy.js");
		//console.log(efbFile + " " + i.toString());
		childProcess.fork(efbFile, [i.toString()]);

	}
}

var startChild = function(taskList) {
	var efbFile = process.argv[1];
	var threadId = Number(process.argv[2]);
	taskList[threadId]();
}

var go = function(taskList) {
	var argc = process.argv.length;
	if (argc < 3) {
		//this means this is the main process;
		launchEfb(taskList);
	} else {
		startChild(taskList);
	}
	
};

var EFB_RT = {
	"go"	: go, 
};

module.exports = EFB_RT;
