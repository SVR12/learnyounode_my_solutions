// Program to serve same text file for each request via http server
// port on which server should listen = first command-line arguemnt
// location of file which is to be served = second command-line argument
const http = require('http') // to get http module from Node core library
const fs = require('fs') // to get fs(File System) module from Node core library

var src = fs.createReadStream(process.argv[3])	// new instance of ReadStream object

var server = http.createServer(function callback(request, response){	// new instance of http server
	src.pipe(response)	// sending data from 'src' to 'response' stream
})
server.listen(Number(process.argv[2]))	// server listening to port number provided as first command-line argument

// learnyounode original solution
/*
var http = require('http') // to get http module from Node core library
var fs = require('fs') // to get fs(File System) module from Node core library

var server = http.createServer(function(req,res){	// new instance of http server
	res.writeHead(200,{'content-type': 'text/plain'})	// sends response header to request
	fs.createReadStream(process.argv[3]).pipe(res)	// creating a ReadStream and sending data from that ReadStream to 'res' stream using '.pipe()' method 
})

server.listen(Number(process.argv[2]))	// server listening on port number provided as first command-line argument
*/
