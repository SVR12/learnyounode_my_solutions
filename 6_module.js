// module for directory reading and filtering function

var fs = require('fs')	// to get fs(File System) module from Node core library
const path = require('path')	// to get path module from Node core Library

module.exports = function(directoryName, extensionName, callback){
	const ex = '.' + extensionName	// Since extenstionName is not passed with prefix '.', example - extensionName will be 'txt' and not '.txt'
	var reqFileNames = []	// empty array which will store filtered fileNames and will be returnd to callback

	fs.readdir(directoryName, function(err,list){
		if(err){
			return callback(err)	// since all errors are required to be returned to callback function as mentioned
		}else{
			const fileNames = list.toString().split(',')
			for(let i=0;i<fileNames.length;i++){
				if(path.extname(fileNames[i]) === ex){
					reqFileNames.push(fileNames[i])
				}
			}

			return callback(null,reqFileNames)

			// Instead of this 'if loop' filtering inside for loop we can also directly use inbuilt 'filter' method in javascript for arrays
			/*
			list = list.filter(function(file)){	// this will keep only filenames in list having required extension and remove all other filenames
				return path.extname(file) === ex
			}
			return callback(null,list)
			*/
		}
	})

}