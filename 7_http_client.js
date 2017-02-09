// Program to perform HTTP GET request to URL provided as first command-line argument and print each "data" event to new linw on console(stdout)
var http = require('http') // get http module from Node core library
http.get(process.argv[2],function callback(response){ // url is passed as first line command argument = process.argv[2]
	response.on('data', function(data){console.log(data.toString())}) // had to convert buffer objects into strings as I was confused about how to use .setEncoding method
	response.on('error', function(error){console.log(error)}) // thought I needed to print error too
	response.on('end', function(end){}) // my stupidity, please ignore this!
})

// learnyounode original solution
/*
var http = require{'http'}	// to get http module from Node core library

http.get(process.argv[2], function (response){
	response.setEncoding('utf8')	// converting response viz. in form of buffer objects intto utf8 strings
	response.on('data', console.log) // apparently prints data, viz event repsonse. Here 'console.log' is working as 'console.log(data)'
	repsonse.on('error', console.error)
}).on('error', console.error)
*/