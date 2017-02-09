// Program to perform HTTP GET request to URL provided in first-line command argument
// Required to collect all data from server and then write two line on console(stdout)
// First line representing number of characters received from the server
// Second line representing the complete string sent by server

// wihtout using third-party package
const http = require('http')	// to get http module from Node core library
var info = []	// empty array in which the data streamed will be appended

http.get(process.argv[2], function(response){
	response.setEncoding('utf8')	// set encoding on output so we don't need to convert buffer object into string later while printing it to console(stdout)
	response.on('data', function(input){
		info.push(input)	// appending outputs in array
	})
	response.on('error',console.error)
	response.on('end', function(){
		output = info.join("")	// joins the array elements to form one string with nothing other than one space character in between them
		/*
		if .join("and") then it will join all elements and have <space>and in between them, if .join() then it will join all elements and have <space>, in between them
		*/
		console.log(output.length) // First line representing number of characters received 
		console.log(output) // Second line representing the complete string received
	})
})

// learnyounode original solution with using third-party package
// need to first install bl Node package using "npm install bl" in console (you need to install this in same folder where your .js program file is)
/*
var http = require('http')	// to get http module from Node core library
var bl = require('bl')	// to get bl(bufferlist) module from Node core library

http.get(process.argv[2], function(response){
	response.pipe(bl(function(err,data){
		if(err){
			console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
*/