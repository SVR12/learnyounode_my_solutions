// Program to use a single asynchronous filesystem operation to read a file and print the number of newlines(\n) it ontains to the console(stdout)

var fs = require('fs') // to get fs(File System) module from the Node core library for performing filesystem operation 
var fp = process.argv[2] //to read the filepath

fs.readFile(fp, function(err,data){
	// check and print if any error occurred
	if(err){
		console.log(err)
	}

	// need to convert the data (obtained by callback function) from buffer object into string
	var lines = data.toString().split('\n').length -1 
	console.log(lines)
})

// providing 'utf8' as second argument will encode the data (obtained from callback function) into UTF8 formatted strings
/*
fs.readFile(fp, 'utf8', function(err,data){ 
	if(err){
		console.log(err)
	}
	var lines = data.split('\n').length -1
	console.log(lines)
})
*/