// Program to print a list of files in a given directory filtered by the extension of the files

var fs = require('fs') // to get fs(File System) module from the Node core library
const path = require('path') // to get path module from the Node core library

var dr = process.argv[2] // store directory name
var et = '.' + process.argv[3] // file extension to filter
//	console.log(et)	// just to check the extension :)

fs.readdir(dr, function(err,list){ // reading directory method with callback function as its second argument
	if(err){
		console.log(err)
	}

//	console.log(list)	//it was to see how file names were present in list, whether separated by spaces or line spaces or ',' or whatsoever; turns it out it were separated by ','
	var fileNames = list.toString().split(',')	// to split all the file names in as array elements of string type

// now since we have all the filenames as different elements, we just need to check and print which filename have same extension as provided extension to filter
	for(let i=0;i<fileNames.length;i++){
		// path.extname returns the extesion of file i.e. part at end of file after '.', if nothing is present after '.' it returns empty string
		if(path.extname(fileNames[i]) === et){
			console.log(fileNames[i])
		}
	}
})